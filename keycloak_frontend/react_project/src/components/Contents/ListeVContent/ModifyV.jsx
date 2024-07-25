import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ModifyV = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [validator, setValidator] = useState({
    nom: '',
    tel: '',
    consultants: []
  });
  const [allConsultants, setAllConsultants] = useState([]);
  const [selectedConsultants, setSelectedConsultants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching validator with ID:', id); // Debugging line

        const validatorResponse = await axios.get(`http://localhost:8081/api/v1/validators/${id}`);
        console.log('Validator Response:', validatorResponse.data); // Debugging line
        setValidator(validatorResponse.data);
        setSelectedConsultants(validatorResponse.data.consultants || []);

        const consultantsResponse = await axios.get('http://localhost:8081/api/v1/consultants');
        console.log('Consultants Response:', consultantsResponse.data); // Debugging line
        setAllConsultants(consultantsResponse.data);

        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err.message); // Debugging line
        setError(err.message || 'Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValidator({
      ...validator,
      [name]: value
    });
  };

  const handleConsultantChange = (e) => {
    const { options } = e.target;
    const selectedOptions = Array.from(options).filter(option => option.selected).map(option => JSON.parse(option.value));
    setSelectedConsultants(selectedOptions);
  };

  const handleUpdate = async () => {
    try {
      const updatedValidator = {
        ...validator,
        consultants: selectedConsultants.map(c => ({ id: c.id }))
      };

      console.log('Updated Validator Data:', updatedValidator); // Debugging line

      const response = await axios.put(`http://localhost:8081/api/v1/validators/${id}`, updatedValidator);
      console.log('Update Response:', response); // Debugging line
      navigate('/admin/liste_validateur');
    } catch (error) {
      console.error('Update Error:', error.message); // Debugging line
      setError(error.message || 'Failed to update validator');
    }
  };

  const handleCancel = () => {
    navigate('/admin/liste_validateur');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
      <div>
        <h2>Modify Validator</h2>
        <div>
          <label>
            Name:
            <input
                type="text"
                name="nom"
                value={validator.nom}
                onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input
                type="text"
                name="tel"
                value={validator.tel}
                onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Consultants:
            <select multiple={true} onChange={handleConsultantChange} value={selectedConsultants.map(c => JSON.stringify(c))}>
              {allConsultants.map(consultant => (
                  <option key={consultant.id} value={JSON.stringify(consultant)}>
                    {consultant.nom}
                  </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
  );
};

export default ModifyV;








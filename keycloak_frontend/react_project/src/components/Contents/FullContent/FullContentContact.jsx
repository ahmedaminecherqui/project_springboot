import React from 'react';
import "../ContentHeaders/ContentHeaderDashboard.jsx"
import ContentHeaderDashboard from "../ContentHeaders/ContentHeaderDashboard.jsx";
import "../../../styles/content.css"
import ContentHeaderListeV from "../ContentHeaders/ContentHeaderListeV.jsx";
import ContentHeaderContact from "../ContentHeaders/ContentHeaderContact.jsx";
import {FaFacebook, FaGithub, FaInstagram, FaTwitter, FaWhatsapp} from "react-icons/fa";

const FullContentContact = () => {
    return(
        <div>
            <div>
                <ContentHeaderContact/>
            </div>
            <div className="contact-container">
                <h2>Contact Us</h2>
                <div className="contact-info">
                    <div className="contact-item">
                        <FaInstagram className="contact-icon"/>
                        <span>Instagram: your_instagram_handle</span>
                    </div>
                    <div className="contact-item">
                        <FaTwitter className="contact-icon"/>
                        <span>Twitter: your_twitter_handle</span>
                    </div>
                    <div className="contact-item">
                        <FaFacebook className="contact-icon"/>
                        <span>Facebook: your_facebook_page</span>
                    </div>
                    <div className="contact-item">
                        <FaWhatsapp className="contact-icon"/>
                        <span>WhatsApp: your_whatsapp_number</span>
                    </div>
                    <div className="contact-item">
                        <FaGithub className="contact-icon"/>
                        <span>GitHub: your_github_profile</span>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default FullContentContact;
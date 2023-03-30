import React, { memo } from 'react';
import { ContactIpunts } from './ContactInputs';
import insta from '../../styles/imgs/insta.svg';
import twitter from '../../styles/imgs/twitter.svg';
import discord from '../../styles/imgs/discord.svg';
import phone from '../../styles/imgs/phone.svg';
import mail from '../../styles/imgs/mail.svg';
import location from '../../styles/imgs/location.svg';

export const Contact: React.FC = memo(() => {
  console.log('render contact'); // eslint-disable-line no-console

  return (
    <section className="contact">
      <div className="contact__header">
        <h1 className="contact__title">Contact Us</h1>
        <p className="contact__subtitle">Any question or remarks? Just write us a message!</p>
      </div>

      <div className="contact__field">
        <div className="contact__info">
          <div className="contact__info__header">
            <h2 className="contact__info__title">Contact Information</h2>
            <p className="contact__info__subtitle">Say something to start a live chat!</p>
          </div>

          <div className="contact__contacts">
            <div className="contact__contacts__phone">
              <img src={phone} alt="phone" className="contact__contacts__phone-img" />
              <a href="tel: +10123456789" className="contact__contacts__phone-number">+1012 3456 789</a>
            </div>
            <div className="contact__contacts__mail">
              <img src={mail} alt="phone" className="contact__contacts__mail-img" />
              <a href="mailto: demo@gmail.com" className="contact__contacts__mail-link">demo@gmail.com</a>
            </div>
            <div className="contact__contacts__adress">
              <img src={location} alt="location" className="contact__contacts__adress-img" />
              <a href="/" className="contact__contacts__adress-street">132 Dartmouth Street Boston, Massachusetts 02156 United States</a>
            </div>
          </div>

          <div className="contact__social-media">
            <div className="contact__twitter">
              <a href="https://twitter.com/">
                <img src={twitter} alt="twitter" />
              </a>
            </div>
            <div className="contact__instagram">
              <a href="https://instagram.com">
                <img src={insta} alt="instagram" />
              </a>
            </div>
            <div className="contact__discord">
              <a href="https://discord.com">
                <img src={discord} alt="discord" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact__inputs">
          <ContactIpunts />
        </div>
      </div>
    </section>
  );
});

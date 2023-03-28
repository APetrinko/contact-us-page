import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="contact">
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
              <img src="" alt="" />
              <a href="tel: +10123456789">+1012 3456 789</a>
            </div>
            <div className="contact__contacts__phone">
              <img src="" alt="" />
              <a href="mailto: demo@gmail.com">demo@gmail.com</a>
            </div>
            <div className="contact__contacts__phone">
              <img src="" alt="" />
              <a href="/">132 Dartmouth Street Boston, Massachusetts 02156 United States</a>
            </div>
          </div>

          <div className="contact__social-media">
            <div className="contact__twitter">
              <a href="https://twitter.com/">twitter</a>
            </div>
            <div className="contact__instagram">
              <a href="https://instagram.com">insta</a>
            </div>
            <div className="contact__discord">
              <a href="https://discord.com">discord</a>
            </div>
          </div>
        </div>
        <div className="contact__inputs">
        </div>
      </div>
    </div>
  );
};

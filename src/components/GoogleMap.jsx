import React from 'react';

function GoogleMap() {
  return (
    <section className="map-section">
      <div className="container">
        <h2 className="text-center mt-5 mb-4">Visit Gradienthome</h2>
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.904678509218!2d124.57650079310159!3d11.02165044360892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3307f6d57a9c90b9%3A0x20ead5253f11e064!2sTambulilid%2C%20Ormoc%2C%20Leyte!5e0!3m2!1sen!2sph!4v1687755803403!5m2!1sen!2sph"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="text-center mt-4">123 sa Puso Mo, Brgy. Tambulilid, Ormoc City</p>
      </div>
    </section>
  );
}

export default GoogleMap;
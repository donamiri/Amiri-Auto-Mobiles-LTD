import React from "react";

const About = () => {
  return (
    <div className="container mt-5 tinos-bold">
      <h2 className="text-decoration-underline">About Us</h2>
      <p>
        Amiri Auto Mobiles is a global car dealership company domiciled
        in Nairobi, Kenya. We sell new & used vehicles from our primary source
        markets in Europe, the Middle East, and the States.
      </p>
      <p>
        Our company is committed to delivering high-quality products and
        services to meet the unique needs of our clients. With years of
        experience in the industry, Amiri Auto Mobiles has established itself as
        a reliable and innovative partner for individuals and businesses alike.
      </p>
      <p>
        Customer satisfaction is at the heart of everything we do. Whether
        you're seeking a sleek new car or a second hand one, we strive to offer 
        exceptional value and unmatched customer service.
      </p>

      {/* Contact Information */}
      <div className="mt-4">
        <h3 className="text-decoration-underline">Locate Us At</h3>
        <p>Amiri Auto Mobiles-Westlands</p>
        <p>Waiyaki Way</p>
        <p>Office tel :0780280486</p>
        <p>Nairobi, Kenya</p>
        <p>Haven Court, Second Floor</p>
      </div>
    </div>
  );
};

export default About;

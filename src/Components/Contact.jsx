import React from "react";

const Contact= () => {
  return (
    <div className="container mt-5">
      {/* Contact Form Section */}
      <div className="row">
        <div className="col-md-5">
          <br />
          <h5 className="text-center text-light bg-dark p-2">Contact Us</h5>
          <form>
            <fieldset>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
              />
              <br />
              <br />
              <textarea
                rows="7"
                placeholder="Leave a comment"
                className="form-control"
              ></textarea>
              <br />
              <input
                className="btn btn-outline-success text-green"
                type="submit"
                value="Send Message"
              />
            </fieldset>
          </form>
          <br />
        </div>

        {/* Social Media Section */}
        <div className="col-md-4">
          <br />
          <h4 className="text-center text-light bg-dark p-2">Stay Connected</h4>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <a
              href="https://instagram.com/don_mikeamiri"
              target="_blank"
              rel="noreferrer"
              className="text-dark fs-4"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://github.com/donamiri"
              target="_blank"
              rel="noreferrer"
              className="text-dark fs-4"
            >
              <i class="bi bi-github"></i>
            </a>
            <a
              href="https://web.telegram.org/a/"
              target="_blank"
              rel="noreferrer"
              className="text-dark fs-4"
            >
              <i class="bi bi-telegram"></i>
            </a>
            <a
              href="https://wa.me/+254780280486"
              target="_blank"
              rel="noreferrer"
              className="text-dark fs-4"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
          <p className="mt-3 text-center">
            Follow us on social media to stay updated on the latest deals and
            cars in the market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

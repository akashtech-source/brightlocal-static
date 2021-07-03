import React, { useEffect } from "react";


const ContactMe = () => {
  
  return (
    <div id="Contact" className="container text-white">
      <div className="mt-5 text-center ">
        <h5>CONTACT ME</h5>
        <h2>Want To <span className="text-warning">Work With Me</span></h2>
      </div>
      <div >
      <div className="row mt-5">
        
        <div data-aos='fade-left' className="col-md-6 ms-md-5 ms-5">
        <div className="w-75 ms-md-5">
            <form
              className="ms-md-5"
              action="https://formspree.io/f/myylkjlv"
              method="POST"
            >
              <div className="form-group">
                
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                />
                <br />
              </div>

              <div className="form-group">
                
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <br />
              </div>

              <div className="form-group">
                
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  cols="10"
                  rows="6"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <br />

              <button
                type="submit"
                formTarget="_blank"
                className="btn btn-brand"
                style={{marginTop: '-20px'}}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactMe;
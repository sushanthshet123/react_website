import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${data.fullname} You Sucessfully Filled the Form.
    phone : ${data.phone}
    email : ${data.email}
    your Message to us :  ${data.msg}`);
  };
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return { ...preVal, [name]: value };
    });
  };
  return (
    <>
      <div className="container my-3">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div>
        <div className="container col-md-10 contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Full Name
                  </label>
                  <input
                    type="name"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your name"
                    name="fullname"
                    value={data.fullname}
                    onChange={inputEvent}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="phone"
                    value={data.phone}
                    onChange={inputEvent}
                    placeholder="Enter your mobile number"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    value={data.email}
                    onChange={inputEvent}
                    placeholder="Enter your emal address "
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Example textarea
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    name="msg"
                    value={data.msg}
                    onChange={inputEvent}
                    placeholder="message"
                    rows="3"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-outline-primary font-weight-bold"
                    type="submit"
                  >
                    Submit Form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;

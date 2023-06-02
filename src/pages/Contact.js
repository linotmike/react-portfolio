import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: null,
    name: null,
    message: null,
  });
  function submitHandler() {
    console.log(formData);
  }
  function inputHandler(e) {
    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <section className="form">
      
       contact
        <input 
        style={{borderRadius:'25px'}}
        type="text"
        name="name"
        placeholder="name"
        onChange={inputHandler}
      ></input>
       
        
        <input
        style={{borderRadius:'25px'}}
          type="text"
          placeholder="email"
          name="email"
          id="input-email"
          onChange={inputHandler}
        ></input>
        


          <textarea
          style={{borderRadius:'25px'}}
          className="text"
            name="message"
            placeholder=" textarea"
            onChange={inputHandler}
          ></textarea>
          <button className="submit-btn" onClick={submitHandler}>submit</button>
          </section>
          
      
  );
}

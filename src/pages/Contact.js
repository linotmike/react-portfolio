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
    setFormData ({...formData,[e.target.name]:e.target.value})
  }
  return (
    <section>
      Contact
      <div>
        <input
          type="text"
          placeholder="email"
          name="email"
          id="input-email"
          onChange={inputHandler}
        ></input>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={inputHandler}
        ></input>
        <textarea
          name="message"
          placeholder="textarea"
          onChange={inputHandler}
        ></textarea>
        <button onClick={submitHandler}>submit</button>
      </div>
    </section>
  );
}

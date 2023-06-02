import React from "react";

export default function About() {
  return (
    <section>
        <br/>
        <br/>
      <div style={{borderRadius:'25px'}} className="card">
        <div className="card-text">
          <div className="portada"></div>
          <div className="title-total">
            <div className="title">Upcoming software developer</div>
            <h2>Birhanu Mengistu</h2>

            <div className="desc">
              {" "}
              I was born and raised in Ethiopia, addis ababa which is the
              capital city. I am 22 years old and i have an associates degree in
              aviation. I have a private pilot license with 217 hrs of flight time in a cessna 172/152. I am currently taking a full-stack-web
              development couse at university of washington.{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

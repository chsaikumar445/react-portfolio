import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Expereince</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>REACT</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>ExpressJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>MySql</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
     <div className="experience__deployment">
         <h3>Deployment</h3>
         <div className="experience__content">
           <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Azure</h4>
                <small className="text-light">Certified</small>
              </div>
            </article>
             <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Aws</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
             <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Docker</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Kubernaties</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
        </div>
        </div>
        <div className="experience__others">
         <h3>others</h3>
         <div className="experience__content">
           <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Kafka</h4>
                <small className="text-light">Certified</small>
              </div>
            </article>
             <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Github Actions</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
             <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Micro Services</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Redis</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

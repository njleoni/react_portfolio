import React from "react";
import "./style.css";
import cv from "../../images/cv_img.png";

const Contact = () => {
    return (
        <section className="container">
        <div className="card contact">
            <div className="card-body">
            <div className="row">
                <div className="col-sm-12">
                <h2>Contact Information</h2>
                <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                <div className="row justify-content-between">
                    <div className="col-sm-4">
                    <h4>Nick Leoni</h4>
                    <h4>nicholas.leoni@gmail.com</h4>
                    <h4>Lafayette, CO</h4>
                    <h4>970-331-6897</h4>
                    </div>
                    <div className="col-sm-3 alignImg">
                    <a href="https://drive.google.com/file/d/1eMVdfkkJVdfo6g_qadVdmSWyOZk_0iaQ/view?usp=sharing" target="_blank" download="newfilename">
                        <img src={cv} className="img-fluid cvImg" alt="CV" />
                    </a>
                    <h5 id="resume">Resume</h5>
                    <hr />
                    <h5>
                        <a href="https://github.com/njleoni" target="_blank">GitHub
                        </a>
                        |
                        <a href="http://www.linkedin.com/in/nick-leoni-08b3739b" target="_blank">Linkedin
                        </a>
                    </h5>
                    <h5>
                    </h5>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default Contact;
import React from "react";
import "./style.css";
import me from "../../images/me.png";

const About = () => {

  return (
    <section className="container">
      <div className="card index">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-12">
              <h2>About Me</h2>
              <hr />
              <div className="col-sm-4 index-img">
                <img src={me} className="img-fluid" alt="Me" />
              </div>
              <p>
                I grew up in northern Minnesota being cold and playing
                ice-hockey. I have been in Colorado for the better part of
                sixteen years with a short stint in California and then a year
                living in Australia. I have always been drawn to Colorado even
                before I had ever been here because of the mountains and I can't
                seem to leave them.
              </p>
              <p>
                My previous education consists of a two-year technical college
                program with an emphasis on process control and automation.
                Growing up in an iron ore mining town, this education was well
                suited for a career in the mines. The education was a great base
                as it got me into the postition I am today.
              </p>
              <p>
                I have been with my current company for eleven years now where I
                am the Manager of Software Implementation for three software
                deployment teams. In my position, I work closely with the
                developers of the software and am using this bootcamp className to
                gain more knowldge into their world to better communicate about
                the software we deploy.
              </p>
              <p>
                Aside from my day job, I have been intrigued by coding for some
                time now as I see the opportunities with having the ability to code.
                I've had a number of ideas over the years and now I can apply my 
                new skills towards those ideas that have been in my mind for some time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
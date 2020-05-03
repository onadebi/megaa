import React, { Component } from "react";
import mandate from "../www/images/webfiles/mandate.jpg";

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <section className="container">
          <div className="row">
            <div className="col-md-9 col-sm-12">
              <article id="main-col">
                <h1 className="page-title">About Us</h1>
                <section className="about_mandate">
                  <img src={mandate} alt="" className=""/>
                <ul>
                  <li>To support the hearing-impaired  person develop appropriate social skills in order to function within both hearing and hearing-impaired  community</li>
                  <li>To support the development of ability in disability</li>
                  <li>To support the person with special needs ( hearing-impaired)to be self dependent.</li>
                  <li>To provide quality services and support persons with special needs without segregation</li>
                  <li> To support   spreading the gospel to hearing-impaired persons with or without an interpreter</li>
                </ul>
                </section>
                <p className="dark">
                  <a href="contactus" className="onx-link">
                    Contact us
                  </a>{" "}
                  ---
                </p>
              </article>
            </div>
            <div className="col-md-3 col-sm-12">
              <aside id="sidebar">
                <div className="dark">
                  <h3>What We Do</h3>
                  <ul style={{ paddingLeft: "15px" }}>
                    {/* <li>Bespoke Technology Solutions</li>
                    <li>Financial Tech Consulting</li>
                    <li>Digital Investment Services</li> */}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

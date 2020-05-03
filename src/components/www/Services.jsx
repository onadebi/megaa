import React, { Component } from "react";

export default class Services extends Component {
  render() {
    return (
      <div>
        <section className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <article id="main-col">
                <h1 className="page-title">Our Services</h1>
                <ul id="services" style={{ paddingLeft: "0px" }}>
                  <li>
                    <h3>Bespoke Technology Solutions</h3>
                    <p>
                      The strength of any organization lies in the ability to
                      align every employee with the organizational culture. It
                      does not mean suppressing employees' values, but a
                      strategy of how to leverage them for the benefit of the
                      organization.
                    </p>
                  </li>
                  <li>
                    <h3>Financial Tech Consulting</h3>
                    <p>
                      Workplace spirituality provides job satisfaction and
                      trust. It makes work more meaningful. It creates a sense
                      of community and adds value to daily work experience.
                    </p>
                  </li>
                  <li>
                    <h3>Digital Investment Services</h3>
                    <p>
                      Culture for thriving organizations consists of coaching
                      and engagement.
                    </p>
                  </li>
                </ul>
              </article>
            </div>
            <div className="col-md-4 col-sm-12">
              <aside id="sidebar">
                <div className="dark">
                  <h3>Get A Quote</h3>
                  <form className="quote">
                    <div>
                      <label>Name</label>
                      <br />
                      <input type="text" placeholder="Full name" className="form-control" />
                    </div>
                    <div>
                      <label>Email</label>
                      <br />
                      <input type="email" placeholder="Email Address"  className="form-control"/>
                    </div>
                    <div>
                      <label>Message</label>
                      <br />
                      <textarea placeholder="Message"  className="form-control"></textarea>
                    </div>
                    <button className="btn btn-primary btn-block mt-2" type="submit">
                      Send
                    </button>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

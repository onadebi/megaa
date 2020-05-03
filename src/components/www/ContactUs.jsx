import React, { Component } from "react";

export default class ContactUs extends Component {

  HandleSubmit=(e)=>{
    e.preventDefault();
    window.alert('Form submitted');
    const frmContact = window.document.querySelector('#frmContact');
    frmContact.reset();
  }
  render() {
    return (
      <div>
        <section className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <article id="main-col">
                  <div className="coolbox" style={{marginTop:'10px'}}>
                    <h3>Get In Touch</h3>
                    <form className="quote" id="frmContact">
                      <div>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input
                          type="text"
                          placeholder="Name"
                          className="form-control"
                          id="name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="form-control"
                          id="email"
                        />
                      </div>
                      <div>
                        <label htmlFor="message">Message</label>
                        <br />
                        <textarea
                          placeholder="Message"
                          className="form-control"
                          id="message"
                        ></textarea>
                      </div>
                      <br />
                      <div id="dvBtn" style={{ textAlign: "center" }}>
                        <button className="button_1" type="reset">
                          Reset
                        </button>
                        <button className="button_1" type="button" onClick={this.HandleSubmit}>
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
           
              </article>
            </div>
            <div className="col-md-4 col-sm-12">
              <aside id="sidebar">
              <div className="box250">
                    <h2 className="medTitleHeader"></h2>
                    <p>
                        </p><address>
                        <span className="fa fa-map-marker onx-fa-size"  data-original-title="" title="" aria-describedby="tooltip897759"></span>&nbsp;Ughelli, Delta State.<br/>&nbsp;&nbsp;&nbsp;Nigeria.<br/>
                            <span className="fa fa-phone onx-fa-size"data-original-title="" title="" aria-describedby="tooltip490661"></span>
                            &nbsp;(234) 803-937-5759
                        </address>

                        <address>
                        <i className="fa fa-envelope onx-fa-size" data-original-title="" title="" aria-describedby="tooltip108366"></i>&nbsp;<a href="mailto:info@megahearingimpairedfoundation.org" style={{textDecoration:'none'}}>info@megahearingimpairedfoundation.org</a><br/>
                        <i className="fa fa-envelope onx-fa-size" data-original-title="" title="" aria-describedby="tooltip108366"></i><a href="mailto:support@megahearingimpairedfoundation.org" style={{textDecoration:'none'}}>support@megahearingimpairedfoundation.org</a>
                        </address>
                    <p></p>
                </div>    
             </aside>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

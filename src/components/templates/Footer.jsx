import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import ScrollButton from '../utils/ScrollButton';

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#373839",
          color: "#fff",
          marginTop: "20px",
          borderTop: "1px solid orange"
        }}
      >
        <div>
            <div className="row footerTop" style={{width:'90%', margin:'auto', paddingTop:'15px'}}>
            <div className="col-md-4 col-sm-12">
                <div className="box250">
                    <h2 className="medTitleHeader">Our Mandate</h2>
                    <p>
                    To support the hearing-impaired  person develop appropriate social skills in order to function within both hearing and hearing-impaired  community
                    </p>
                    <p>
                      {/* <a className="onx-btn" href="/contactus">Learn more »</a> */}
                    <NavLink className="onx-btn" to="/contactus">Learn more »</NavLink>
                    </p> 
                </div>
                </div>
                <div className="col-md-4 col-sm-12">
                <div className="box250">
                    <h2 className="medTitleHeader">Useful Links</h2>
                    <p>
                        Blog<br/>
                        Facebook<br/>
                        Training<br/>
                        Services<br/>
                        Contact<br/>
                    </p>
                </div>
                </div>
                <div className="col-md-4 col-sm-12">
                <div className="box250">
                    <h2 className="medTitleHeader">Contact info</h2>
                    <p>
                        </p><address>
                        <span className="fa fa-map-marker onx-fa-size"  data-original-title="" title="" aria-describedby="tooltip897759"></span>&nbsp;Ughelli, Delta State.<br/>&nbsp;&nbsp;&nbsp;Nigeria.<br/>
                            <span className="fa fa-phone onx-fa-size"data-original-title="" title="" aria-describedby="tooltip490661"></span>
                            &nbsp;<abbr title="Phone">(234) 803-937-5759</abbr>
                        </address>

                        <address>
                        <i className="fa fa-envelope onx-fa-size" data-original-title="" title="" aria-describedby="tooltip108366"></i>&nbsp;<a href="mailto:info@megahearingimpairedfoundation.org" style={{textDecoration:'none'}}>info@megahearingimpairedfoundation.org</a><br/>
                        <i className="fa fa-envelope onx-fa-size" data-original-title="" title="" aria-describedby="tooltip108366"></i><a href="mailto:support@megahearingimpairedfoundation.org" style={{textDecoration:'none'}}>support@megahearingimpairedfoundation.org</a>
                        </address>
                    <p></p>
                </div>
                </div>
               
            </div>
        </div>
        <footer className="footerMain" style={{textAlign:'center'}}>
          <p>Copyright © 2020 - Megaa Hearing Impaired Foundation | All rights reserved</p>
        </footer>        
        <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
      </div>
    );
  }
}
const footerStye = {
  textAlign: "center",
  backgroundColor: "#fafafa",
  color: "#000",
  fontWeight: "bolder"
};

export default Footer;

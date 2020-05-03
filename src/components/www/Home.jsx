import React, { Component } from "react";
import Carousel from "../utils/Carousel";
import banners1 from "../www/images/webfiles/bannerex1.png";
import banners2 from "../www/images/webfiles/bannerex2.png";
import banners3 from "../www/images/webfiles/bannerex3.png";
import UnderContruction from "./UnderContruction";
import "./css/CarouselOverides.css";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
       <div> 
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="2000">
              <img src={banners1} alt="" className="img img-fluid" />
            </div>
            <div className="carousel-item" data-interval="2000">
              <img src={banners2} alt="" className="img img-fluid" />
            </div>
            <div className="carousel-item">
              <img src={banners3} alt="" className="img img-fluid" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleInterval"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleInterval"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="midLiner">
          <h3>
            Caring for the hearing impaired{" "}
            <i className="fa fa-plus f-awesome"></i> More
          </h3>
        </div>
</div>
        <br />
        <div className="container">
          {/* <UnderContruction /> */}
          <div className="row homeGrid">
            <div>
              <h4>Our vision <i className="fa fa-eye" style={{color:'#416294', fontSize:'1.2em'}} aria-hidden="true"></i></h4>
              <aside>
                <p>
                  To be a premier educational center in character and vocational
                  development in a distinctively Christian environment
                </p>
              </aside>
            </div>
            <div>
              {/* <div style={{textAlign:'center', border:'none'}}>
              <i className="fa fa-bullseye" style={{color:'#416294', fontSize:'2.2em', textAlign:'center'}} aria-hidden="true"></i>
              </div> */}
              <h4>Our Goal  <i className="fa fa-bullseye" style={{color:'#416294', fontSize:'1.2em', textAlign:'center'}} aria-hidden="true"></i></h4>
              <aside>
                <p>
                  To support the hearing-impaired persons to achieve academic,
                  vocational and moral/ educational goals so as to become
                  responsible individuals to themselves, family and the society
                  at large.
                </p>
              </aside>
            </div>
            <div>
              <h4>Our passion <i className="fa fa-lightbulb-o" style={{color:'#416294', fontSize:'1.2em', textAlign:'center'}} aria-hidden="true"></i></h4>
              <aside>
                <p>
                  To care and impact special needs person (Hearing Impaired)
                  with formal/ moral education and skills
                </p>
              </aside>
            </div>
            {/* <div className="col-md-4 col-sm-6">
              <h3 className="text-justify">
                <i className="fa fa-laptop f-awesome onx-fa-size"></i>
                &nbsp;Website Solutions
              </h3>
              <p className="text-justify">
                We build clean &amp; responsive websites with unlimited custom
                emails and full social media integration for you.
              </p>
            </div>
            <div className="col-md-4 col-sm-6">
              <h3 className="text-justify">
                <i className="fa fa-paper-plane f-awesome onx-fa-size"></i>
                &nbsp;Fintech Solutions
              </h3>
              <p className="text-justify">
                We work with you to define and (re)design your logo to reflect
                your brand values that makes you unique.
              </p>
            </div>
            <div className="col-md-4 col-sm-6">
              <h3 className="text-justify">
                <i className="fa fa-cubes f-awesome onx-fa-size"></i>
                &nbsp;Software Development
              </h3>
              <p className="text-justify">
                We offer custom software development using PHP and .NET
                frameworks that speeds up service delivery for our clients.
              </p>
            </div>
            <div className="col-md-4 col-sm-6">
              <h3 className="text-justify">
                <i className="fa fa-mobile-phone hvr-buzz-out f-awesome onx-fa-size"></i>
                &nbsp;Mobile Apps
              </h3>
              <p className="text-justify">
                We deliver both native (Android) and hybrid (Web) mobile apps
                that serves your software needs.
              </p>
            </div>
            <div className="col-md-4 col-sm-6">
              <h3 className="text-justify">
                <i className="fa fa-cart-plus hvr-buzz-out f-awesome onx-fa-size"></i>
                &nbsp;E-Commerce
              </h3>
              <p className="text-justify">
                We design professional eCommerce websites for personal and
                corporate entities using the latest web tools.
              </p>
            </div>
            <div className="col-md-4 col-sm-6">
              <h3 className="text-justify">
                <i className="fa fa-bullhorn hvr-buzz-out f-awesome onx-fa-size"></i>
                &nbsp;Digital Marketing
              </h3>
              <p className="text-justify">
                We provide marketing services that helps companies attract
                visitors using Bulk SMS, Voice Blast, SEO and others..
              </p>
            </div>
           */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

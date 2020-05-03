import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Eligibility from "../www/Eligibility";
import Services from "../www/Services";
import NotFound from "../www/NotFound";
import Home from "../www/Home";
import AboutUs from '../www/AboutUs';
import Faq from '../www/Faq';
import HowItWorks from '../www/HowItWorks';
import ContactUs from '../www/ContactUs';
import WhyUs from '../www/WhyUs';
import NavBar from "./NavBar";
import Gallery from '../www/Gallery';
import Footer from "./Footer";
import School from "../www/School";
import ScrolledToTopRoute from '../utils/ScrolledToTopRoute';

export default class _LayoutDefault extends Component {
  constructor() {
    super();

    this.state = {};
  }

  async componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar/>
            <main role="main" className="">
            <Switch>
              <Route exact path="/eligibility" component={Eligibility} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/school" component={School} />
              <Route exact path="/aboutus" component={AboutUs} />
              {/* <Route exact path="/contactus" component={ContactUs} /> */}
              <ScrolledToTopRoute exact path='/contactus' component={ContactUs}/>
              <Route exact path="/faq" component={Faq} />
              <Route exact path="/howitworks" component={HowItWorks} />
              <Route exact path="/whyus" component={WhyUs} />
              <Route exact path="/" component={Home} />
              {/* <ProtectedRoute exact path='/Cust/Customer' component={Customer}/>
                        <ProtectedRoute exact path='/dashboard/RoleAccess' component={RoleAccess}/> */}
              <Route path="*" component={NotFound} />
            </Switch>
          </main>
          <Footer/>
        </Router>
      </React.Fragment>
    );
  }
}

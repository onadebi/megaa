 import React, {
  Component
} from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import _LayoutDefault from './components/templates/_LayoutDefault';
import ScrollButton from './components/utils/ScrollButton';

class App extends Component {

  state = {
    
  };
 
  render() {
    return ( 
      <React.Fragment>
        <Router>
            <_LayoutDefault/>
        </Router>
      </React.Fragment>
  )}
}
export default App;
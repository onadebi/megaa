import React, { Component } from 'react'
import { withRouter,Route } from 'react-router-dom'

class ScrolledToTopRoute extends Component {

    componentWillMount(){
        window.scrollTo(0,0);
    }
    render() {
        const { ...rest} = this.props;
        return <Route {...rest} render={props => (<Component {...props} />)} />
    }
}

export default withRouter(ScrolledToTopRoute);
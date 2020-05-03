import React, { Component } from "react";

export default class Counter extends Component {


  render() {
    //console.log('thipropss', this.props);
    return (
      <React.Fragment>
        {this.props.children}
        <h1>
          <span className={this.GetBadgeClassMethod()}>
            {this.formatCount()}
          </span>
          <button onClick={()=> this.props.onIncrement(this.props.counter)} className="btn btn-primary btn-sm">
            +
          </button>
          <button
            onClick={()=> this.props.onDecrement(this.props.counter)}
            className="btn btn-primary btn-sm m-2" disabled={this.props.IsDisabled}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.props.OnDeleteCounter(this.props.counter.id)}
          >
            Delete
          </button>
        </h1>
      </React.Fragment>
    );
  }



  noListStyle = {
    listStyleType: "none"
  };


  formatCount = () => {
    const { counter } = this.props;
    return counter.value === 0 ? "0" : counter.value;
  };

  GetBadgeClassMethod() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value <= 0 ? "warning" : "primary";
    return classes;
  }
}

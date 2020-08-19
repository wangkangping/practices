import React, { Component } from "react";
import { filterTodo } from "../actions";
import { connect } from "react-redux";
import { BrowserRouter as NavLink, Link } from "react-router-dom";

class Filter extends Component {
  constructor() {
    super();
  }

  handleClick = (event) => {
    let filter = event.target.dataset.filter;

    this.props.dispatch(filterTodo(filter));
  };

  render() {
    return (
      <div>
        <Link to="/">
          {/* <button onClick={this.handleClick} data-filter="SHOW_ALL"> */}
            All
          {/* </button> */}
        </Link>
        <Link to="/active">
          {/* <button onClick={this.handleClick} data-filter="SHOW_ACTIVE"> */}
            Active
          {/* </button> */}
        </Link>
        <Link to="/complete">
          {/* <button onClick={this.handleClick} data-filter="SHOW_COMPLETE"> */}
            Complete
          {/* </button> */}
        </Link>
      </div>
    );
  }
}

export default connect()(Filter);

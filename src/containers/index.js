import React, { Component } from "react";
import { connect } from "react-redux";
// import List from "./List";

import Header from "../components/Header";
import Filter from "../components/Filter";
import { toggleTodo } from "../actions";

class index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Filter></Filter>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

const mapStateToProps = (state = []) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
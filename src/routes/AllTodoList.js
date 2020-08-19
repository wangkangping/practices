import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '../components/List';
import { toggleTodo } from "../actions";

class AllTodoList extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                {/* <Header></Header> */}
                <List todos={this.props.todos} toggleTodo={this.props.toggleTodo}></List>
                {/* <Filter></Filter> */}
            </div>
        )
    }
}

// const getVisibleTodos = (todos, visibleFilter) => {
//     switch (visibleFilter) {
//       case "SHOW_ALL":
//         return todos;
//       case "SHOW_ACTIVE":
//         return todos.filter((t) => !t.isComplete);
//       case "SHOW_COMPLETE":
//         return todos.filter((t) => t.isComplete);
//       default:
//         return todos;
//     }
//   };
  
  const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id)),
  });
  
  const mapStateToProps = (state = []) => ({
    todos: state.todos
  });

export default connect(mapStateToProps, mapDispatchToProps)(AllTodoList)

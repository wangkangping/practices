import React, { Component } from "react";
// import { toggleTodo } from "../actions";
// import { connect } from "react-redux";

class List extends Component {
    render(){
        console.log(this);
        var todos = this.props.todos || [];
        return (
            <ul>
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  onClick={() => this.props.toggleTodo(todo.id)}
                  style={{
                    textDecoration: todo.isComplete ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </li>
              ))}
            </ul>
          );
    };
}

// const List = ({ todos = [], toggleTodo }) => {

//     console.log(this);
//     // console.log(props);
//     // console.log(this.state);
//   return (
//     <ul>
//       {todos.map((todo) => (
//         <li
//           key={todo.id}
//           onClick={() => toggleTodo(todo.id)}
//           style={{
//             textDecoration: todo.isComplete ? "line-through" : "none",
//           }}
//         >
//           {todo.text}
//         </li>
//       ))}
//     </ul>
//   );
// };

// const getVisibleTodos = (todos, visibleFilter) => {
//   switch (visibleFilter) {
//     case "SHOW_ALL":
//       return todos;
//     case "SHOW_ACTIVE":
//       return todos.filter((t) => !t.isComplete);
//     case "SHOW_COMPLETE":
//       return todos.filter((t) => t.isComplete);
//     default:
//       return todos;
//   }
// };

// const mapDispatchToProps = (dispatch) => ({
//   toggleTodo: (id) => dispatch(toggleTodo(id)),
// });

// const mapStateToProps = (state = []) => ({
//   todos: getVisibleTodos(state.todos, state.visibleFilter)
// });

// export default connect(mapStateToProps, mapDispatchToProps)(List);

export default List;

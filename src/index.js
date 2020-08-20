import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  hashHistory,
  browserHistory,
  Switch,
} from "react-router-dom";

import store from "./store";
import APP from "./containers";
import ActiveTodoList from "./routes/ActiveTodoList";
import AllTodoList from "./routes/AllTodoList";
import CompleteTodoList from "./routes/CompleteTodoList";

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <APP></APP>
        <Switch>
          <Route exact path="/" component={AllTodoList} />
          <Route path="/active" component={ActiveTodoList} />
          <Route path="/complete" component={CompleteTodoList} />
        </Switch>
      </Route>
      <Route path="/complete" component={CompleteTodoList} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

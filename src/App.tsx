import React, {
  Component,
  ReducerState,
  ReducerAction,
  Dispatch,
  ReducerWithoutAction,
} from "react";
import "./App.css";

/**
 * reducer to update state called automatically by dispatch
 * @param state {object} - existing state
 * @param action {object} - contains type and payload for the state update
 * example -> {type:"setSecretWord", payload: "party"}
 * @return {object} - new state
 */
type Action = {
  type: string;
  payload: { index: number; status: string };
};
type InitialStateType = {
  secretWord: string;
};
const intialState = {
  secretWord: "",
};
function reducer(
  state: InitialStateType,
  action: Action
): ReducerWithoutAction<any> {
  switch (action.type) {
    case "setSecretWord":
      return { state, secretWord: action.payload };
    default:
      throw new Error(`Invalid action type ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, intialState);
  return <div data-test="component-app"></div>;
}

export default App;

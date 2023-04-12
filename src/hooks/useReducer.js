import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return {
        counter: state.counter++,
        flag: !state.flag,
      };
      break;

    default:
      break;
  }
};

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    flag: false,
  });

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "INC" });
        }}
        type="button"
      >
        Increment
      </button>
      {state.flag && <p>Here is Message</p>}
      {state.counter}
    </div>
  );
}

import React, { forwardRef, useImperativeHandle, useState } from "react";

export const ChildComp = forwardRef((props, ref) => {
  const [counter, setCounter] = useState(0);

  useImperativeHandle(ref, () => ({
    increment: () => {
      setCounter(counter + 1);
    },
  }));
  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Button From Child
      </button>{" "}
      {counter}
    </>
  );
});

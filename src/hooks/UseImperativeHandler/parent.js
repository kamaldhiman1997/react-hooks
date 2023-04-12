import React, { useRef } from "react";
import { ChildComp } from "./child";

export default function UseImperitiveHandler() {
  const ref = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          ref.current.increment();
        }}
        type="button"
      >
        Button from Parent
      </button>
      <ChildComp ref={ref} />
    </div>
  );
}

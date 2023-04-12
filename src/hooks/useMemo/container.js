import React, { useMemo, useState } from "react";
import RenderComponent from "./child";

export default function MemoContainer() {
  const [stateOne, setStateOne] = useState(0);
  const [stateTwo, setStateTwo] = useState(0);
  const MemomizeComp = useMemo(() => {
    return <RenderComponent />;
  }, [stateTwo]);
  return (
    <>
      <div>MemoContainer</div>
      <button
        onClick={() => {
          setStateOne(stateOne + 1);
        }}
      >
        Change State One
      </button>
      <button
        onClick={() => {
          setStateTwo(stateTwo + 1);
        }}
      >
        Change State Two
      </button>
      {MemomizeComp}
      <RenderComponent />
    </>
  );
}

import React, { useCallback, useState } from "react";
import ChildFunction from "./childWithFn";

export default function CallBackContainer() {
  const [flag, setFlag] = useState(false);

  const [name, setName] = useState("Here is my name");

  const fn = useCallback(() => {
    return name;
  }, [name]);

  return (
    <>
      <button
        onClick={() => {
          setFlag(!flag);
        }}
      >
        Toogle Flag
      </button>
      <button
        onClick={() => {
          setName("name");
        }}
      >
        Change Name
      </button>
      {flag && <p>Flag is on</p>}
      <ChildFunction fn={fn} />
    </>
  );
}

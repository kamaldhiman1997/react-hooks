import React, { useEffect } from "react";

export default function ChildFunction({ fn }) {
  useEffect(() => {
    console.log("fn is changed");
  }, [fn]);
  return fn();
}

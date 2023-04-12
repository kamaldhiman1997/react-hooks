import React, { useContext } from "react";
import { AppContext } from "./contextContainer";

export default function Username() {
  const context = useContext(AppContext);

  return <div>Username:- {context.userName}</div>;
}

import React, { useContext } from "react";
import { AppContext } from "./contextContainer";

export default function Login() {
  const context = useContext(AppContext);

  return (
    <div>
      <input
        name="username"
        onChange={(e) => {
          context.setUserName(e.target.value);
        }}
      />
    </div>
  );
}

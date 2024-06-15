import React from "react";
import { Button } from "../ui/button";

const LoginButtons = () => {
  return (
    <div className="hidden md:flex gap-4">
      <Button variant="link">Login</Button>
      <Button rightIcon="rightArrowLine">Signup</Button>
    </div>
  );
};

export default LoginButtons;

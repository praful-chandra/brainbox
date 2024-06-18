import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

const LoginButtons = () => {
  return (
    <div className="hidden md:flex gap-4">
      <Link href="/login">
        <Button variant="link">Login</Button>
      </Link>
      <Button rightIcon="rightArrowLine">Signup</Button>
    </div>
  );
};

export default LoginButtons;

import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

const LoginButtons = () => {
  return (
    <div className="hidden md:flex gap-4">
      <Link href="/auth/login">
        <Button variant="link">Login</Button>
      </Link>
      <Link href="/auth/signup">
        <Button rightIcon="rightArrowLine">Signup</Button>
      </Link>
    </div>
  );
};

export default LoginButtons;

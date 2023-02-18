import { User } from '@/ts/types/User';
import React from 'react';
import Card from '@/components/Card/Card';
import Link from 'next/link';
type Props = {
  signup: User;
  handleSignupChange: ({
    target: { value, id },
  }: {
    target: { value: any; id: any };
  }) => void;
  setCurrSignupPage: (arg0: string) => void;
};

const SignupUser = ({
  signup,
  handleSignupChange,
  setCurrSignupPage,
}: Props) => {
  return (
    <Card className="custom-form-container mx-auto" padding="px-5 py-3">
      <h1 className="text-center font-semibold text-lg">
        Welcome to Devify Community
      </h1>
      <form className="flex flex-col gap-4">
        <div className="form-group flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={signup.email}
            onChange={handleSignupChange}
            id="email"
            placeholder="Email"
            className="border rounded p-2"
          />
        </div>
        <div className="form-group flex flex-col gap-1">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            value={signup.first_name}
            onChange={handleSignupChange}
            id="first_name"
            placeholder="First Name"
            className="border rounded p-2"
          />
        </div>
        <div className="form-group flex flex-col gap-1">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            value={signup.last_name}
            onChange={handleSignupChange}
            id="last_name"
            placeholder="Last Name"
            className="border rounded p-2"
          />
        </div>
        <div className="form-group flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={signup.password}
            onChange={handleSignupChange}
            id="password"
            placeholder="Last Name"
            className="border rounded p-2"
          />
        </div>
        <button
          className="mx-auto py-2 px-3 bg-indigo-800 text-white rounded w-[8rem]"
          onClick={() => setCurrSignupPage('about')}
        >
          Next
        </button>
        <p className="text-center">
          Already have an account?{' '}
          <Link href="/login" className="text-indigo-800 underline">
            Log in here.
          </Link>
        </p>
      </form>
    </Card>
  );
};

export default SignupUser;

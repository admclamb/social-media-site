import Card from '@/components/Card/Card';
import Layout from '@/layout/Layout';
import { Profile } from '@/ts/types/Profile';
import { User } from '@/ts/types/User';
import Head from 'next/head';
import { stringify } from 'querystring';
import React, { useState } from 'react';

type Props = {};

const Signup = (props: Props) => {
  const [signup, setSignup] = useState<User>({
    email: '',
    first_name: '',
    last_name: '',
  });
  const [profile, setProfile] = useState<Profile>({
    about: '',
    avatar_url: '',
    work: '',
    skills: [],
    brand_primary: '',
    brand_secondary: '',
  });

  const handleSignupChange = ({ target: { value, id } }) => {
    setSignup((curr) => {
      return {
        ...curr,
        [id]: value,
      };
    });
  };

  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <Layout classes="bg-gray-100" hasSpacing>
        <Card className="custom-form-container mx-auto">
          <h1 className="text-center font-semibold text-lg">
            Welcome to Devify Community
          </h1>
          <form className="flex flex-col gap-4">
            <div className="form-group flex flex-col">
              <label htmlFor="email" className="mb-1 font-semibold">
                Email
              </label>
              <input
                type="email"
                value={signup.email}
                onChange={handleSignupChange}
                id="email"
                placeholder="Email"
                className="border rounded p-2"
              />
            </div>
            <div className="form-group flex flex-col">
              <label htmlFor="email" className="mb-1 font-semibold">
                First Name
              </label>
              <input
                type="email"
                value={signup.first_name}
                onChange={handleSignupChange}
                id="first_name"
                placeholder="First Name"
                className="border rounded p-2"
              />
            </div>
            <div className="form-group flex flex-col">
              <label htmlFor="email" className="mb-1 font-semibold">
                Last Name
              </label>
              <input
                type="email"
                value={signup.last_name}
                onChange={handleSignupChange}
                id="last_name"
                placeholder="Last Name"
                className="border rounded p-2"
              />
            </div>
            <button
              type="submit"
              className="mx-auto py-2 px-3 bg-indigo-800 text-white rounded w-[8rem]"
            >
              Next
            </button>
          </form>
        </Card>
      </Layout>
    </>
  );
};

export default Signup;

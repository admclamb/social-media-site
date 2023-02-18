import Card from '@/components/Card/Card';
import SignupProfile from '@/components/Signup/SignupProfile/SignupProfile';
import SignupUser from '@/components/Signup/SignupUser/SignupUser';
import Layout from '@/layout/Layout';
import { Profile } from '@/ts/types/Profile';
import { User } from '@/ts/types/User';
import Head from 'next/head';
import Link from 'next/link';
import { stringify } from 'querystring';
import React, { useState } from 'react';

type Props = {};

const Signup = (props: Props) => {
  const [signup, setSignup] = useState<User>({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
  });
  const [profile, setProfile] = useState<Profile>({
    about: '',
    work: '',
  });
  const [currSignupPage, setCurrSignupPage] = useState('signup');
  const handleSignupChange = ({ target: { value, id } }) => {
    setSignup((curr) => {
      return {
        ...curr,
        [id]: value,
      };
    });
  };

  const handleSubmit = () => {};

  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <Layout classes="bg-gray-100" hasSpacing>
        {currSignupPage === 'signup' ? (
          <SignupUser
            signup={signup}
            handleSignupChange={handleSignupChange}
            setCurrSignupPage={setCurrSignupPage}
          />
        ) : currSignupPage === 'about' ? (
          <SignupProfile
            profile={profile}
            handleProfileChange={handleSignupChange}
            setCurrSignupPage={setCurrSignupPage}
          />
        ) : null}
      </Layout>
    </>
  );
};

export default Signup;

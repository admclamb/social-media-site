import { UserApi } from '@/api/UserApi';
import Card from '@/components/Card/Card';
import SignupProfile from '@/components/Signup/SignupProfile/SignupProfile';
import SignupUser from '@/components/Signup/SignupUser/SignupUser';
import { UserContext } from '@/context/UserContext';
import Layout from '@/layout/Layout';
import { Error } from '@/ts/types/Error';
import { Profile } from '@/ts/types/Profile';
import { User } from '@/ts/types/User';
import Head from 'next/head';
import Link from 'next/link';
import { stringify } from 'querystring';
import React, { useContext, useState } from 'react';

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
    avatar_url: '',
    skills: [],
    brand_primary: '#000',
    brand_secondary: '#fff',
  });
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState<Error>({});
  const [currSignupPage, setCurrSignupPage] = useState('signup');
  const handleSignupChange = ({ target: { value, id } }) => {
    setSignup((curr) => {
      return {
        ...curr,
        [id]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    try {
      setError({});
      event.preventDefault();
      console.log(signup, profile);
      const response = await UserApi.create(signup, profile);
      console.log(response);
      if (response.data) {
        setUser(response);
      }
    } catch (error: any) {
      setError({ message: error.message });
    }
  };

  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <Layout classes="bg-gray-100" hasSpacing>
        <form onSubmit={handleSubmit}>
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
        </form>
      </Layout>
    </>
  );
};

export default Signup;

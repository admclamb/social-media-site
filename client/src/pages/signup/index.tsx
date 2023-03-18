import React, { useContext, useState } from "react";
import Head from "next/head";
import Card from "@/components/Card/Card";
import { UserApi } from "@/api/UserApi";
import SignupProfile from "@/components/Signup/SignupProfile/SignupProfile";
import SignupUser from "@/components/Signup/SignupUser/SignupUser";
import { UserContext } from "@/context/UserContext";
import Layout from "@/layout/Layout";
import { Error } from "@/ts/types/Error";
import { Profile } from "@/ts/types/Profile";
import { User } from "@/ts/types/User";

import ErrorAlert from "@/errors/ErrorAlert";

type Props = {};

const Signup = (props: Props) => {
  const [signup, setSignup] = useState<User>({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });
  const [profile, setProfile] = useState<Profile>({
    about: "",
    work: "",
    avatar: "",
    skills: [],
    primary_color: "#000",
    secondary_color: "#fff",
  });
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState<Error>({});
  const [currSignupPage, setCurrSignupPage] = useState("signup");
  const handleSignupChange = ({ target: { value, id } }) => {
    setSignup((curr) => {
      return {
        ...curr,
        [id]: value,
      };
    });
  };

  const handleProfileChange = ({ target: { value, id } }) => {
    console.log(value);
    setProfile((curr) => {
      return {
        ...curr,
        [id]: value,
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      setError({});
      const response = await UserApi.getInstance().create(signup, profile);
      setUser(response);
    } catch (error: any) {
      setError({ message: error.message });
    }
  };

  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <Layout className="bg-gray-100" hasSpacing>
        <Card className="custom-form-container mx-auto" padding="p-5">
          <ErrorAlert error={error} className="mb-2" />
          <form>
            {currSignupPage === "signup" ? (
              <SignupUser
                signup={signup}
                handleSignupChange={handleSignupChange}
                setCurrSignupPage={setCurrSignupPage}
              />
            ) : currSignupPage === "about" ? (
              <SignupProfile
                profile={profile}
                handleProfileChange={handleProfileChange}
                setCurrSignupPage={handleSignupChange}
                handleSubmit={handleSubmit}
              />
            ) : null}
          </form>
        </Card>
      </Layout>
    </>
  );
};

export default Signup;

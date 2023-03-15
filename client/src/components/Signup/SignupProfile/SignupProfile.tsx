import React from "react";
import Card from "@/components/Card/Card";
import { Profile } from "@/ts/types/Profile";
import ButtonPrimary from "@/components/Button/ButtonPrimary/ButtonPrimary";

type Props = {
  profile: Profile;
  handleProfileChange: (arg0: any) => void;
  setCurrSignupPage: (arg0: any) => void;
  handleSubmit: any;
};

const SignupProfile = ({
  profile,
  handleProfileChange,
  setCurrSignupPage,
  handleSubmit,
}: Props) => {
  return (
    <>
      <h1 className="text-center font-semibold text-lg">
        Tell Us About Yourself
      </h1>
      <div className="flex flex-col gap-4">
        <div className="form-group flex flex-col">
          <label htmlFor="about">About You</label>
          <input
            type="text"
            value={profile.about}
            onChange={handleProfileChange}
            id="about"
            placeholder="About Yourself"
            className="border rounded p-2"
          />
        </div>
        <div className="form-group flex flex-col">
          <label htmlFor="work">Work</label>
          <input
            type="text"
            value={profile.work}
            onChange={handleProfileChange}
            id="work"
            placeholder="Where do You Work"
            className="border rounded p-2"
          />
        </div>
        <div className="flex justify-center gap-4">
          <ButtonPrimary onClick={() => setCurrSignupPage("signup")}>
            Previous
          </ButtonPrimary>
          <ButtonPrimary type="submit" onClick={handleSubmit}>
            Next
          </ButtonPrimary>
          <button
            className="py-2 px-3 bg-indigo-800 text-white rounded w-[8rem]"
            onClick={() => setCurrSignupPage("signup")}
          >
            Previous
          </button>
          <button
            onClick={handleSubmit}
            type="submit"
            className="py-2 px-3 bg-indigo-800 text-white rounded w-[8rem]"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default SignupProfile;

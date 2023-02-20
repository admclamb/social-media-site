import Card from '@/components/Card/Card';
import { Profile } from '@/ts/types/Profile';
import React from 'react';

type Props = {
  profile: Profile;
  handleProfileChange: ({
    target: { value, id },
  }: {
    target: { value: any; id: any };
  }) => void;
  setCurrSignupPage: (arg0: string) => void;
};

const SignupProfile = ({
  profile,
  handleProfileChange,
  setCurrSignupPage,
}: Props) => {
  return (
    <Card className="custom-form-container mx-auto" padding="p-5">
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
            value={profile.about}
            onChange={handleProfileChange}
            id="work"
            placeholder="Where do You Work"
            className="border rounded p-2"
          />
        </div>
        <div className="flex justify-center gap-4">
          <button
            className="py-2 px-3 bg-indigo-800 text-white rounded w-[8rem]"
            onClick={() => setCurrSignupPage('signup')}
          >
            Previous
          </button>
          <button
            type="submit"
            className="py-2 px-3 bg-indigo-800 text-white rounded w-[8rem]"
          >
            Next
          </button>
        </div>
      </div>
    </Card>
  );
};

export default SignupProfile;

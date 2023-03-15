import React from "react";
import Card from "../Card/Card";
import ButtonLightPrimary from "../Button/ButtonLightPrimary/ButtonLightPrimary";
import ButtonOutlinePrimary from "../Button/ButtonOutlinePrimary/ButtonOutlinePrimary";
type Props = {};

const JoinCommunity = (props: Props) => {
  return (
    <Card>
      <h4 className="font-semibold text-lg">
        Devify is a great community of 124 developers
      </h4>
      <p className="text-gray-600">
        Best place for developers to grow in their careers.
      </p>
      <ButtonOutlinePrimary href="/signup" className="block my-2">
        Create Account
      </ButtonOutlinePrimary>
      <ButtonLightPrimary href="/login" className="block">
        Login
      </ButtonLightPrimary>
    </Card>
  );
};

export default JoinCommunity;

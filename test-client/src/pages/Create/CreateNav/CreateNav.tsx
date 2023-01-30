import React from 'react';
import './CreateNav.css';
type Props = {
  textType: string;
  setTextType: React.Dispatch<React.SetStateAction<string>>;
};

const CreateNav = ({ textType, setTextType }: Props) => {
  return (
    <nav className="create-nav">
      <ul>
        <li></li>
      </ul>
    </nav>
  );
};

export default CreateNav;

import React, { useState } from 'react';
import DropdownModal from './DropdownModal/DropdownModal';

type Props = {};

const Dropdown = (props: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <div></div>
      {isDropdownOpen && <DropdownModal />}
    </>
  );
};

export default Dropdown;

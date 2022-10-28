import React from 'react';
import './CreateNav.css';
type Props = {};

const CreateNav = (props: Props) => {
  return (
    <nav className="create-nav">
      <ul>
        <li>
          <select name="text-type">
            <option value="heading1">
              <h3>Heading 1</h3>
            </option>
            <option value="heading2">
              <h4>Heading 2</h4>
            </option>
            <option value="normal">Normal</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default CreateNav;

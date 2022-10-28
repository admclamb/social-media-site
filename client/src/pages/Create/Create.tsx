import React, { useState } from 'react';
import CreateNav from './CreateNav/CreateNav';
type Props = {};

const Create = (props: Props) => {
  const [header, setHeader] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [coverImage, setCoverImage] = useState<string>('');
  return (
    <>
      <CreateNav />
      <main></main>
    </>
  );
};

export default Create;

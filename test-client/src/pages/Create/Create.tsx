import React, { useState } from 'react';
import CreateNav from './CreateNav/CreateNav';
type Props = {};

const Create = (props: Props) => {
  const [header, setHeader] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [coverImage, setCoverImage] = useState<string>('');
  // create-features
  const [textType, setTextType] = useState('heading-1');
  return (
    <>
      <CreateNav textType={textType} setTextType={setTextType} />
      <main></main>
    </>
  );
};

export default Create;

import React, { useState } from "react";

type Props = {
  title: string;
  setTitle: (arg0: string) => void;
};

const CreatePostHeader = ({ title, setTitle }: Props) => {
  const changeTitle = ({ target: { value } }: any) => {
    setTitle(value);
  };

  return (
    <header className="mb-3">
      <form className="flex flex-col gap-3">
        <input
          id="image-uploader"
          type="file"
          accept="image/jpeg, image/png, image/jpg"
          className="border rounded p-2"
        />
        <input
          type="text"
          value={title}
          onChange={changeTitle}
          placeholder="New Post Title Here..."
          className="text-3xl font-semibold p-2 rounded"
        />
      </form>
    </header>
  );
};

export default CreatePostHeader;

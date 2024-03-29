import React from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

type Props = {
  text: string;
  setText: (arg0: string) => void;
};

const CreatePostBody = ({ text, setText }: Props) => {
  const handleChange = ({ target: { value } }: any) => {
    setText(value);
  };
  return (
    <ReactTextareaAutosize
      style={{ width: "100%" }}
      placeholder="Write here..."
      className="p-2 text-lg resize-none"
      value={text}
      onChange={handleChange}
    />
  );
};

export default CreatePostBody;

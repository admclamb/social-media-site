import React from "react";

type Props = {
  url: string;
  alt?: string;
  className: string;
};

const Avatar = ({ url, alt, className }: Props) => {
  return (
    <div className={`border rounded-full ${className}`}>
      <img src={url} className="block" />
    </div>
  );
};

Avatar.defaultProps = {
  className: "h-12 w-12 ",
};

export default Avatar;

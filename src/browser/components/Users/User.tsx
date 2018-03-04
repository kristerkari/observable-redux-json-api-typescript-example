import React from "react";

interface UserProps {
  attributes: {
    "first-name": string;
    "last-name": string;
  };
}

export const User = ({ attributes }: UserProps, index: number) => {
  const number = index + 1;
  const firstName = attributes["first-name"];
  const lastName = attributes["last-name"];
  return (
    <div key={index}>
      {number}. {firstName} {lastName}
    </div>
  );
};

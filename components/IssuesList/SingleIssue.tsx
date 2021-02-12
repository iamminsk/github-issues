import * as React from "react";
import { StarIcon } from "../Icons";

interface Props {
  title: string;
  isStarred: boolean;
}

export const SingleIssue = ({ title, isStarred }: Props) => {
  const [isActive, setIsActive] = React.useState(isStarred);

  return (
    <li
      css={{
        height: 41,
        border: "1px solid #E0E0E0",
        borderRadius: 5,
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        marginBottom: 5,
      }}
    >
      <span css={{ fontSize: 15 }}>{title}</span>
      <button
        onClick={() => {
          setIsActive(!isActive);
        }}
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          outline: "none",
          cursor: "pointer",
        }}
      >
        <StarIcon fill={isActive ? "#fff" : "#21233D"} />
      </button>
    </li>
  );
};

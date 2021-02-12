import { Status } from "../../types";
import { ClosedIssueIcon, OpenIssueIcon, GithubIcon } from "../Icons";

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  count: number;
  status?: Status;
  isActive: boolean;
}

export const Category = ({
  onClick,
  label,
  status,
  count,
  isActive,
}: Props) => (
  <li>
    <button
      onClick={onClick}
      css={{
        width: "100%",
        height: 51,
        display: "flex",
        padding: 15,
        color: "#fff",
        fontSize: 14,
        alignItems: "center",
        backgroundColor: isActive
          ? "rgba(41, 42, 72, 0.8)"
          : "rgba(41, 42, 72, 0)",
        transition: "background-color .2s, color .2s",
        willChange: "background-color, color",
        cursor: "pointer",
        outline: "none",
        ":hover": {
          color: "#8A8995",
        },
      }}
    >
      {status === "open" && <OpenIssueIcon />}
      {status === "closed" && <ClosedIssueIcon />}
      {status === undefined && <GithubIcon />}
      <span css={{ marginLeft: 10, fontSize: 14 }}>{label}</span>
      <span css={{ marginLeft: "auto", color: "#8A8995", fontSize: 14 }}>
        {count}
      </span>
    </button>
  </li>
);

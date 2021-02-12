import * as React from "react";

import { IssueDateGroup } from "../../types";
import { SingleIssue } from "./SingleIssue";

interface Props {
  issues: IssueDateGroup[];
}

export const IssuesList = ({ issues }: Props) => (
  <>
    {issues.map((issueGroup) => (
      <>
        <span
          css={{
            color: "#8A8995",
            fontSize: 12,
            display: "block",
            marginBottom: 5,
          }}
        >
          {issueGroup.date}
        </span>
        <ul>
          {issueGroup.issues.map((issue) => (
            <SingleIssue title={issue.title} isStarred={issue.isStarred} />
          ))}
        </ul>
      </>
    ))}
  </>
);

import { Data, VisibleCategory } from "../../types";
import { Category } from "./Category";

interface Props {
  issues: Data;
  visibleCategory: VisibleCategory;
  setVisibleCategory: (category: VisibleCategory) => void;
}

export const IssuesCategories = ({
  issues,
  visibleCategory,
  setVisibleCategory,
}: Props) => (
  <ul>
    <Category
      label="All"
      count={
        issues
          .map((issueGroup) => issueGroup.data)
          .flat()
          .map((issueGroup) => issueGroup.issues)
          .flat().length
      }
      isActive={visibleCategory === "all"}
      onClick={() => {
        setVisibleCategory("all");
      }}
    />
    {issues.map((issueGroup) => (
      <Category
        label={issueGroup.title}
        status={issueGroup.status}
        count={issueGroup.data.map((group) => group.issues).flat().length}
        isActive={issueGroup.status === visibleCategory}
        onClick={() => {
          setVisibleCategory(issueGroup.status);
        }}
      />
    ))}
  </ul>
);

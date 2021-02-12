export interface Issue {
  id: string;
  title: string;
  isStarred: boolean;
}

export interface IssueDateGroup {
  date: string;
  issues: Issue[];
}

export interface IssueStatusGroup {
  status: Status;
  title: string;
  data: IssueDateGroup[];
}

export type Status = "open" | "closed";
export type VisibleCategory = Status | "all";

export type Data = IssueStatusGroup[];

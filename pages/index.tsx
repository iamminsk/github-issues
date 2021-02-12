import * as React from "react";

import { issuesData } from "../data";
import { VisibleCategory } from "../types";
import {
  ContentWrapper,
  IssuesCategories,
  Window,
  IssuesList,
  NavigationWrapper,
  SystemControls,
} from "../components";

function HomePage() {
  const [visibleCategory, setVisibleCategory] = React.useState<VisibleCategory>(
    "all"
  );

  const visibleIssues = React.useMemo(
    () =>
      visibleCategory === "all"
        ? issuesData.map((issueGroup) => issueGroup.data).flat()
        : issuesData.find((group) => group.status === visibleCategory)?.data,
    [visibleCategory]
  );

  return (
    <Window>
      <NavigationWrapper>
        <SystemControls />
        <IssuesCategories
          issues={issuesData}
          visibleCategory={visibleCategory}
          setVisibleCategory={setVisibleCategory}
        />
      </NavigationWrapper>
      <ContentWrapper>
        {visibleIssues && <IssuesList issues={visibleIssues} />}
      </ContentWrapper>
    </Window>
  );
}

export default HomePage;

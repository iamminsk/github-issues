import { Data } from "./types";

export const issuesData: Data = [
  {
    status: "open",
    title: "Open",
    data: [
      {
        date: "20-04-2016",
        issues: [
          {
            id: "i",
            title: "Page changes",
            isStarred: true,
          },
          {
            id: "j",
            title: "Review of last issues",
            isStarred: false,
          },
        ],
      },
      {
        date: "10-01-2016",
        issues: [
          {
            id: "k",
            title: "Visual UI Update Review",
            isStarred: true,
          },
          {
            id: "l",
            title: "Sidebar changes",
            isStarred: true,
          },
        ],
      },
    ],
  },
  {
    status: "closed",
    title: "Closed",
    data: [
      {
        date: "19-07-2016",
        issues: [
          {
            id: "a",
            title: "Crash update",
            isStarred: true,
          },
          {
            id: "b",
            title: "Page visual UI Update Review",
            isStarred: true,
          },
        ],
      },
      {
        date: "19-07-2016",
        issues: [
          {
            id: "c",
            title: "Sidebar update",
            isStarred: true,
          },
          {
            id: "d",
            title: "Crash issue",
            isStarred: true,
          },
        ],
      },
      {
        date: "19-07-2016",
        issues: [
          {
            id: "e",
            title: "Page changes",
            isStarred: true,
          },
          {
            id: "f",
            title: "Review of last issues",
            isStarred: true,
          },
        ],
      },
      {
        date: "19-07-2016",
        issues: [
          {
            id: "g",
            title: "Page changes",
            isStarred: true,
          },
          {
            id: "h",
            title: "Page visual UI Update Review",
            isStarred: true,
          },
        ],
      },
    ],
  },
];

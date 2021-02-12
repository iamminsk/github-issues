export const ContentWrapper: React.FC = ({ children }) => (
  <main
    css={{
      flexBasis: "100%",
      backgroundColor: "#F6F6F6",
      padding: 10,
      paddingRight: 20,
      overflowY: "auto",
    }}
  >
    {children}
  </main>
);

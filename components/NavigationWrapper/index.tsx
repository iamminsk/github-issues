export const NavigationWrapper: React.FC = ({ children }) => (
  <nav
    css={{
      flexBasis: 152,
      flexShrink: 0,
      backgroundColor: "RGBA(16, 16, 34, 0.9)",
      backdropFilter: "blur(2px)",
    }}
  >
    {children}
  </nav>
);

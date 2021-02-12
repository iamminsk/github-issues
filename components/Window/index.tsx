import { useTheme } from "../../theme";

export const Window: React.FC = ({ children }) => {
  const { bp } = useTheme();

  return (
    <div
      css={{
        maxHeight: 700,
        width: "100%",
        height: "100%",
        display: "flex",
        borderRadius: 10,
        overflow: "hidden",
        flexDirection: "column",
        [bp.FROM_TABLET]: {
          flexDirection: "row",
          maxWidth: 651,
          maxHeight: 502,
        },
      }}
    >
      {children}
    </div>
  );
};

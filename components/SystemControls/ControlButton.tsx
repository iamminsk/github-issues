export const ControlButton: React.FC<{
  backgroundColor: string;
}> = ({ backgroundColor }) => (
  <button
    css={{
      width: 11,
      height: 11,
      display: "block",
      borderRadius: "50%",
      marginRight: 10,
      backgroundColor,
      padding: 0,
      cursor: "pointer",
      outline: "none",
    }}
  />
);

export const StarIcon: React.FC<{ fill: string }> = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMid"
    width="17"
    height="16"
    viewBox="0 0 17 16"
    css={{
      path: {
        fill,
        transition: "fill .2s",
      },
    }}
  >
    <path
      stroke="#E0E0E0"
      fill="#fff"
      fillRule="evenodd"
      d="M8.500,0.000 L11.301,5.028 L16.999,6.112 L13.033,10.302 L13.753,16.000 L8.500,13.561 L3.247,16.000 L3.967,10.302 L0.001,6.112 L5.699,5.028 L8.500,0.000 "
    />
  </svg>
);
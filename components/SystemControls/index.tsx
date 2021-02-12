import { ControlButton } from "./ControlButton";

const controlsColors = ["#FF594F", "#FFBC1B", "#00CD46"];

export const SystemControls = () => (
  <div
    css={{
      height: 41,
      display: "flex",
      alignItems: "center",
      padding: "0 15px",
    }}
  >
    {controlsColors.map((color, index) => (
      <ControlButton key={index} backgroundColor={color} />
    ))}
  </div>
);

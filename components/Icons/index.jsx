import Svg, { Path } from "react-native-svg";

export const IconPlay = ({ color = "#021123" }) => {
  return (
    <Svg width="11" height="15" viewBox="0 0 11 15" fill={color}>
      <Path
        d="M0.015625 0.473022L10.9844 7.4574L0.015625 14.4418V0.473022Z"
        fill={color}
      />
    </Svg>
  );
};

export const IconPause = ({ color = "#021123" }) => {
  return (
    <Svg width="12" height="15" viewBox="0 0 12 15" fill={color}>
      <Path
        d="M8.01562 0.473022H12V14.4418H8.01562V0.473022ZM0 14.4418V0.473022H3.98438V14.4418H0Z"
        fill={color}
      />
    </Svg>
  );
};

import Svg, { Circle, Path } from "react-native-svg";

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

export const IconCheck = ({ color = "#021123", isChecked }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="12" fill={isChecked ? "#00f4bf" : "#FFF"} />
      <Path
        d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
        fill={color}
      />
    </Svg>
  );
};

export const IconEdit = ({ color = "#021123" }) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <Circle cx="16" cy="16" r="15.5" stroke={color} />
      <Path
        d="M24.7188 11.0312L22.8906 12.8594L19.1406 9.10938L20.9688 7.28125C21.1562 7.09375 21.3906 7 21.6719 7C21.9531 7 22.1875 7.09375 22.375 7.28125L24.7188 9.625C24.9062 9.8125 25 10.0469 25 10.3281C25 10.6094 24.9062 10.8438 24.7188 11.0312ZM7 21.25L18.0625 10.1875L21.8125 13.9375L10.75 25H7V21.25Z"
        fill={color}
      />
    </Svg>
  );
};

export const IconDelete = ({ color = "#021123" }) => {
  return (
    <Svg width="18" height="24" viewBox="0 0 18 24" fill="none">
      <Path
        d="M18 1.33333H13.5L12.2143 0H5.78571L4.5 1.33333H0V4H18M1.28571 21.3333C1.28571 22.0406 1.55663 22.7189 2.03887 23.219C2.5211 23.719 3.17516 24 3.85714 24H14.1429C14.8248 24 15.4789 23.719 15.9611 23.219C16.4434 22.7189 16.7143 22.0406 16.7143 21.3333V5.33333H1.28571V21.3333Z"
        fill={color}
      />
    </Svg>
  );
};

export const IconPlus = ({ color = "#B872FF", outline = false }) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <Path
        d="M17.5156 12.9844V11.0156H13.4844V6.98438H11.5156V11.0156H7.48438V12.9844H11.5156V17.0156H13.4844V12.9844H17.5156ZM5.42188 4.96875C7.39062 3 9.75 2.01562 12.5 2.01562C15.25 2.01562 17.5938 3 19.5312 4.96875C21.5 6.90625 22.4844 9.25 22.4844 12C22.4844 14.75 21.5 17.1094 19.5312 19.0781C17.5938 21.0156 15.25 21.9844 12.5 21.9844C9.75 21.9844 7.39062 21.0156 5.42188 19.0781C3.48438 17.1094 2.51562 14.75 2.51562 12C2.51562 9.25 3.48438 6.90625 5.42188 4.96875Z"
        fill={outline ? "#021123" : color}
      />
    </Svg>
  );
};

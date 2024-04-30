import { View } from "react-native";
import styled from "styled-components";

const TopSmall = styled(View)`
  margin-top: 4px;
`;

const TopMedium = styled(View)`
  margin-top: 8px;
`;

const TopLarge = styled(View)`
  margin-top: 16px;
`;

const LeftSmall = styled(View)`
  margin-top: 4px;
`;

const LeftMedium = styled(View)`
  margin-top: 8px;
`;

const LeftLarge = styled(View)`
  margin-top: 16px;
`;

const Spacer = ({ variant }) => {
  if (variant === "top.medium") {
    return <TopMedium />;
  }
  if (variant === "top.large") {
    return <TopLarge />;
  }
  if (variant === "left.small") {
    return <LeftSmall />;
  }
  if (variant === "left.medium") {
    return <LeftMedium />;
  }
  if (variant === "left.large") {
    return <LeftLarge />;
  }
  return <TopSmall />;
};

export default Spacer;

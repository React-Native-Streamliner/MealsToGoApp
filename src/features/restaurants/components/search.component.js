import { View } from "react-native";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";

const SearchContainer = styled(View)`
  background-color: "#11EE11";
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => (
  <SearchContainer>
    <Searchbar />
  </SearchContainer>
);

import { View } from "react-native";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { useContext, useState } from "react";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled(View)`
  background-color: "#11EE11";
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};

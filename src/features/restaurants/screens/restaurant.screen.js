import { SafeAreaView, View, StatusBar, FlatList } from "react-native";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components";
import { useContext } from "react";
import { RestraurantContext } from "../../../services/restaurants/restaurant.context";
import { ActivityIndicator } from "react-native-paper";
import { Search } from "../components/search.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestraurantContext);

  if (isLoading) {
    return (
      <LoadingContainer>
        <Loading size={50} animating={true} />
      </LoadingContainer>
    );
  }
  return (
    <SafeArea>
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfoCard restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;

import { StyleSheet, Text } from "react-native";
import { Card, Button } from "react-native-paper";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street ",
    isOpenNow = true,
    rating = 4,
    isClosedTemporary,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover source={{ uri: photos[0] }} style={styles.image} />
      <Card.Title title={name} style={styles.title} />
    </Card>
  );
};

export default RestaurantInfoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  image: {
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    padding: 0,
  },
});

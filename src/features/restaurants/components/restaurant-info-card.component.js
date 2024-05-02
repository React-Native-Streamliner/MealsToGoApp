import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import Spacer from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/topography/text.component";
import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Details,
  Rating,
  ClosedView,
  Address,
} from "./restaurant-info-card.styles";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street ",
    isOpenNow = false,
    rating = 4,
    isClosedTemporary = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Details>
          <Rating>
            {ratingArray.map((item, index) => (
              <SvgXml key={index} xml={star} width="20" height="20" />
            ))}
          </Rating>
          {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          {isClosedTemporary && (
            <ClosedView>
              <Text variant="error">CLOSED TEMPORARILY</Text>
              <Spacer position="left" size="large">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </ClosedView>
          )}
        </Details>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;

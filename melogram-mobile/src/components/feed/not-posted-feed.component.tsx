import {
  Avatar,
  Box,
  Text,
  Image,
  FlatList,
  VStack,
  View,
  HStack,
  Heading,
  Center,
} from "native-base";
import { useCallback, useState } from "react";
import { RefreshControl } from "react-native";
import { dummyPostData } from "../../config/dummy";
import { darkModePostBackgroundColor } from "../../styles/theme";
import { IconLibraryType } from "../../config/enums";
import IconButtonComponent from "../shared/icon-button/icon-button.component";
import * as Helpers from "../../helpers/helpers";
import FlatButtonComponent from "../shared/flat-button/flat-button.component";
import ActionButtonComponent from "../shared/action-button/action-button.component";

export default function PostedFeedComponent(props: any) {
  const listHeight = Helpers.getScrollViewHeight();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View justifyContent={"center"} alignItems={"center"} height={listHeight}>
      <Box mt={-9} width={"100%"}>
        <Heading mb={9}>You haven't posted yet today.</Heading>
        <ActionButtonComponent buttonText="Post Song" />
      </Box>
    </View>
  );
}

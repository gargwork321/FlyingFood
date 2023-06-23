import { Image, ScrollView, Text, TextInput, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "./components/Categories";
import FeaturedRow from "./components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* <Text className="text-red-800">HomeScreen</Text> */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://www.pngkey.com/png/detail/115-1150420_avatar-png-pic-male-avatar-icon-png.png",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full border-2"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Locations
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={30} color="#00CCBB" />
      </View>

      {/* search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="bg-gray-200 p-3 flex-row flex-1 items-center space-x-2">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput placeholder="Restaurants and cuisines" />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* Body */}

      <ScrollView className="bg-gray-100">
        {/* Categories */}
        <Categories />

        {/* Featured  */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements for our partners"
        />
        {/* Tasty Discounts */}
        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="Everyone's been enjoying these huicy discounts!"
        />
        {/* Offers near you */}
        <FeaturedRow
          id="12345"
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

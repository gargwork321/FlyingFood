import { ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl="https://static.toiimg.com/thumb/89295046.cms?width=680&height=512&imgsize=18632"
        title="testing 1"
      />
      <CategoryCard
        imgUrl="https://static.toiimg.com/thumb/89295046.cms?width=680&height=512&imgsize=18632"
        title="testing 2"
      />
      <CategoryCard
        imgUrl="https://static.toiimg.com/thumb/89295046.cms?width=680&height=512&imgsize=18632"
        title="testing 3"
      />
      <CategoryCard
        imgUrl="https://static.toiimg.com/thumb/89295046.cms?width=680&height=512&imgsize=18632"
        title="testing 1"
      />
      <CategoryCard
        imgUrl="https://static.toiimg.com/thumb/89295046.cms?width=680&height=512&imgsize=18632"
        title="testing 2"
      />
      <CategoryCard
        imgUrl="https://static.toiimg.com/thumb/89295046.cms?width=680&height=512&imgsize=18632"
        title="testing 3"
      />
      <CategoryCard
        imgUrl="https://static.toiimg.com/thumb/89295046.cms?width=680&height=512&imgsize=18632"
        title="testing 1"
      />
      <CategoryCard
        imgUrl="https://static.toiimg.com/thumb/89295046.cms?width=680&height=512&imgsize=18632"
        title="testing 2"
      />
      <CategoryCard
        imgUrl="https://static.toiimg.com/thumb/89295046.cms?width=680&height=512&imgsize=18632"
        title="testing 3"
      />
    </ScrollView>
  );
};

export default Categories;

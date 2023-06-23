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
        imgUrl="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?w=1800&t=st=1687495515~exp=1687496115~hmac=1e3abb33102cab02010e7bfe240e69f521d89814f1e958124fb1f8cde942e830"
        title="testing 1"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/free-photo/beef-cotlet-burger-with-sauce-wooden-board_114579-2600.jpg?w=1800&t=st=1687495804~exp=1687496404~hmac=3a10ec44ce832793ae0834bee19411ff9083a8125513cf3cf690eff86a0253ac"
        title="testing 2"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?w=996&t=st=1687495618~exp=1687496218~hmac=03606e3d94223e6e69d8da463ed56e8d1d0931e40f3a39f23d0c375324d15976"
        title="testing 3"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?w=1800&t=st=1687495651~exp=1687496251~hmac=9a38e19de40520c76835d9ffac582c447b5b6ec38d344c408c28e323f363bc9e"
        title="testing 1"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/premium-photo/traditional-south-indian-meal-food-served-big-banana-leaf-food-platter-complete-thali-selective-focus_466689-50773.jpg?w=1800"
        title="testing 2"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/premium-photo/traditional-turkish-food-made-meat-wheat-delicious-ramadan-food-turkish-name-keskek_693630-10619.jpg?w=1800"
        title="testing 3"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=1800&t=st=1687495878~exp=1687496478~hmac=ae84a1e2edeb515f1d6f3dc2826e04ca95d4c662d4824e53f71ab7ff16b6c1de"
        title="testing 1"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/premium-photo/bowl-food-with-piece-meat-vegetables-it_867452-673.jpg?w=1380"
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

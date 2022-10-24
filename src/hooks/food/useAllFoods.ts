import { useQuery } from "@tanstack/react-query";
import { FIND_ALL_FOODS, FIND_ALL_PRODUCTS } from "../../../graphql";
import { graphQLClient } from "../../../graphql/graphQLClient";
import { FIND_SITES } from "../../../graphql/query/site/site.wear.query";
import { Food, Product } from "../../../interfaces";
import { Site } from "../../../interfaces/site.interface";



export const findAllFoods = async () => {
  const { findAllFoods } = await graphQLClient.request<{ findAllFoods: Food[] }>(FIND_ALL_FOODS);
  return findAllFoods;
};

export function useAllFoods() {
  return useQuery(["find-all-foods"], () => findAllFoods());
}

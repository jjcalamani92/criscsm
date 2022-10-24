import { useQuery } from "@tanstack/react-query";
import { FIND_PRODUCT, graphQLClient } from "../../../graphql";
import { Product } from "../../../interfaces";
import { getQuery } from "../../../utils";


export const findProduct = async (id:string, type:string) => {
  const { findProduct } = await graphQLClient.request<{findProduct: Product}>(
    FIND_PRODUCT,
    { id: id, type: type }
  );
  return findProduct;
};

export function useProduct(asPath: string) {
  const query = getQuery(asPath)
  const id = query[5]
  const type = query[4]

  return useQuery(["find-product", id, type],  () => findProduct(id, type));
}

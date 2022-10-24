import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { UPDATE_PAGE_1, graphQLClient } from "../../../../graphql";
import { Page, UpdatePage } from "../../../../interfaces";

export const useUpdatePage1 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id, input }:  UpdatePage) => {
      const { updatePage1 } = await graphQLClient.request<{ updatePage1: Page }>(UPDATE_PAGE_1, {
        id,
        input,
      });
      return updatePage1;
    },
    {
      onSuccess: async (updatePage1, {id, input}) => {
        const pageId = id
        queryClient.setQueryData(['find-page1', pageId], updatePage1);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Updated Page",
          showConfirmButton: false,
          timer: 1000,
        });
      },
      onError: (error: { response: { errors: [{ message: string }] } }) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.errors[0].message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      },
    }
  );
};
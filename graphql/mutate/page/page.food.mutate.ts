import {  gql } from 'graphql-request'


export const CREATE_PAGE_0_FOOD = gql`
  mutation CreatePage0Food($input: CreatePage!) {
    createPage0Food(input: $input) {
			_id
      slug
      siteId
      parentId
      data{
        type
        seo{
          title
          description
          image{
            src
            alt
          }
        }
      }
    }
  }
`;
export const UPDATE_PAGE_0_FOOD = gql`
  mutation UpdatePage0Food($id:ID!, $input: UpdatePage!) {
    updatePage0Food(id:$id, input: $input) {
			_id
      siteId
      parentId
      data{
        type
        seo{
          title
          description
          image{
            src
            alt
          }
          
        }
      }
    }
  }
`;
export const UPDATE_IMAGE_PAGE_0_FOOD = gql`
mutation UpdateImagePage0Food($id: ID!, $inputImage: UpdateImage!, $uid: String!) {
  updateImagePage0Food (id:$id, inputImage: $inputImage, uid:$uid) {
			_id
      siteId
      parentId
      data{
        type
        seo{
          title
          description
          image{
            src
            alt
          }
          
        }
      }
    }
  }
`;
export const DELETE_PAGE_0_FOOD = gql`
  mutation DeletePage0Food($id: ID!) {
    deletePage0Food(id: $id)
  }
`;
export const DELETE_PAGES_0_FOOD= gql`
mutation DeletePages0Food($ids: [String!]!) {
  deletePages0Food(ids:$ids)
}
`;
export const CREATE_PAGE_1_FOOD = gql`
  mutation CreatePage1Food($input: CreatePage!) {
    createPage1Food(input: $input) {
			_id
      slug
      siteId
      parentId
      data{
        type
        seo{
          title
          description
          image{
            src
            alt
          }
        }
      }
    }
  }
`;
export const UPDATE_PAGE_1_FOOD = gql`
  mutation UpdatePage1Food($id:ID!, $input: UpdatePage!) {
    updatePage1Food(id:$id, input: $input) {
			_id
      siteId
      parentId
      data{
        type
        seo{
          title
          description
          image{
            src
            alt
          }
          
        }
      }
    }
  }
`;
export const UPDATE_IMAGE_PAGE_1_FOOD = gql`
mutation UpdateImagePage1Food($id: ID!, $inputImage: UpdateImage!, $uid: String!) {
  updateImagePage1Food (id:$id, inputImage: $inputImage, uid:$uid) {
			_id
      siteId
      parentId
      data{
        type
        seo{
          title
          description
          image{
            src
            alt
          }
          
        }
      }
    }
  }
`;
export const DELETE_PAGE_1_FOOD = gql`
  mutation DeletePage1Food($id: ID!) {
    deletePage1Food(id: $id)
  }
`;
export const DELETE_PAGES_1_FOOD= gql`
mutation DeletePages1Food($ids: [String!]!) {
  deletePages1Food(ids:$ids)
}
`;
export const CREATE_PAGE_2_FOOD = gql`
  mutation CreatePage2Food($input: CreatePage!) {
    createPage2Food(input: $input) {
			_id
      slug
      siteId
      parentId
      data{
        type
        seo{
          title
          description
          image{
            src
            alt
          }
        }
      }
    }
  }
`;
export const UPDATE_PAGE_2_FOOD = gql`
  mutation UpdatePage2Food($id:ID!, $input: UpdatePage!) {
    updatePage2Food(id:$id, input: $input) {
			_id
      siteId
      parentId
      data{
        type
        seo{
          title
          description
          image{
            src
            alt
          }
          
        }
      }
    }
  }
`;
export const UPDATE_IMAGE_PAGE_2_FOOD = gql`
mutation UpdateImagePage2Food($id: ID!, $inputImage: UpdateImage!, $uid: String!) {
  updateImagePage2Food (id:$id, inputImage: $inputImage, uid:$uid) {
			_id
      siteId
      parentId
      data{
        type
        seo{
          title
          description
          image{
            src
            alt
          }
          
        }
      }
    }
  }
`;
export const DELETE_PAGE_2_FOOD = gql`
  mutation DeletePage2Food($id: ID!) {
    deletePage2Food(id: $id)
  }
`;
export const DELETE_PAGES_2_FOOD= gql`
mutation DeletePages2Food($ids: [String!]!) {
  deletePages2Food(ids:$ids)
}
`;
export const CREATE_PAGE_3_FOOD = gql`
  mutation CreatePage3Food($input: CreatePage!) {
    createPage3Food(input: $input) {
			_id
      slug
      siteId
      parentId
      data{
        type
        seo{
          title
          description
          image{
            src
            alt
          }
        }
      }
    }
  }
`;
export const UPDATE_PAGE_3_FOOD = gql`
  mutation UpdatePage3Food($id:ID!, $input: UpdatePage!) {
    updatePage3Food(id:$id, input: $input) {
			_id
      siteId
      parentId
      data{
        type
        seo{
          title
          description
          image{
            src
            alt
          }
          
        }
      }
    }
  }
`;
export const UPDATE_IMAGE_PAGE_3_FOOD = gql`
mutation UpdateImagePage3Food($id: ID!, $inputImage: UpdateImage!, $uid: String!) {
  updateImagePage3Food (id:$id, inputImage: $inputImage, uid:$uid) {
			_id
      siteId
      parentId
      data{
        type
        seo{
          title
          description
          image{
            src
            alt
          }
          
        }
      }
    }
  }
`;
export const DELETE_PAGE_3_FOOD = gql`
  mutation DeletePage3Food($id: ID!) {
    deletePage3Food(id: $id)
  }
`;
export const DELETE_PAGES_3_FOOD= gql`
mutation DeletePages3Food($ids: [String!]!) {
  deletePages3Food(ids:$ids)
}
`;
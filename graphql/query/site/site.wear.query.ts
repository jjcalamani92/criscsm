import { gql } from "graphql-request";
export const FIND_SITES_WITH_CURSOR = gql`
  query ListSitesWithCursor($args: ConnectionArgs!) {
    listSitesWithCursor(args: $args) {
      pageData {
        count
        limit
        offset
      }
      page {
        edges {
          node {
            _id
            data {
              seo {
                title
                image {
                  src
                  alt
                }
              }
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;
export const FIND_SITES_WEAR = gql`
  query FindSitesWear {
    findSitesWear {
      _id
      data {
        type
        dataBase {
          value
        }
        seo {
          title
          image {
            src
            alt
          }
        }
      }
    }
  }
`;

export const FIND_SITE_WEAR = gql`
  query FindSiteWear($id: ID!) {
    findSiteWear(id: $id) {
      _id
      data {
        name
        description
        type
        seo {
          title
          description
        }
        dataBase {
          uid
          label
          value
        }
        
      }
      url
    }
  }
`;
export const FIND_SITE_WEAR_BY_LAYOUT = gql`
  query FindSiteWear($id: ID!) {
    findSiteWear(id: $id) {
      _id
      data {
        name
        description
        seo {
          title
          description
        }

        image {
          src
          alt
        }
        logo {
          src
          alt
        }
        icon {
          src
          alt
        }
      }
      url
      page {
        _id
        data {
          type
          seo {
            title
            href
          }
        }
        page {
          _id
          data {
            type
            seo {
              title
              href
            }
          }
        }
      }
    }
  }
`;

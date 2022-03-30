import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const blockClient = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "https://www.yokaiswap.com/subgraphs/name/yokaiswap/blocks",
  }),
  cache: new InMemoryCache(),
});

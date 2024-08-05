import { gql } from "@apollo/client";

gql(`mutation UpdateWallet($privateKey: CreateWalletInput!) {
  updateWallet(privateKey: $privateKey) {
    address
    createdAt
    id
    updatedAt
  }
}`)

// gql(`query GetWalletBalances {
//   getWalletBalances {
//     tokens
//   }
// }`)

// gql(`query GetWalletBalances {
//   getWalletTransactions {
//     from
//     gas
//     id
//     time
//     to
//     value
//   }
// }`)
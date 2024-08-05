import { gql } from "@apollo/client";


const NotificationGQL = gql`
mutation CreatePropertyNotification($input: CreatePropertyNotificationInput!) {
  createPropertyNotification(input: $input) {
    createdAt
    id
    updatedAt
  }
}
`
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRole = /* GraphQL */ `
  query GetRole($id: ID!) {
    getRole(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRoles = /* GraphQL */ `
  query ListRoles(
    $filter: ModelRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getHapticEffect = /* GraphQL */ `
  query GetHapticEffect($id: ID!) {
    getHapticEffect(id: $id) {
      id
      name
      createdAt
      updatedAt
      PointXAmplitude
      PointYAmplitude
      PointXFrequency
      pointYFrequency
      userID
      __typename
    }
  }
`;
export const listHapticEffects = /* GraphQL */ `
  query ListHapticEffects(
    $filter: ModelHapticEffectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHapticEffects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        PointXAmplitude
        PointYAmplitude
        PointXFrequency
        pointYFrequency
        userID
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const hapticEffectsByUserID = /* GraphQL */ `
  query HapticEffectsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelHapticEffectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    hapticEffectsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        PointXAmplitude
        PointYAmplitude
        PointXFrequency
        pointYFrequency
        userID
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBetaData = /* GraphQL */ `
  query GetBetaData($id: ID!) {
    getBetaData(id: $id) {
      id
      companyName
      companyPosition
      betaRegisterAt
      User {
        id
        firstName
        lastName
        email
        phoneNumber
        password
        currentPlanStartAt
        curentPlanEndAt
        createdAt
        deletedAt
        HapticEffects {
          items {
            id
            name
            createdAt
            updatedAt
            PointXAmplitude
            PointYAmplitude
            PointXFrequency
            pointYFrequency
            userID
            __typename
          }
          nextToken
          __typename
        }
        Role {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        modifiedAt
        planID
        updatedAt
        userRoleId
        __typename
      }
      createdAt
      updatedAt
      betaDataUserId
      __typename
    }
  }
`;
export const listBetaData = /* GraphQL */ `
  query ListBetaData(
    $filter: ModelBetaDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBetaData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        companyName
        companyPosition
        betaRegisterAt
        User {
          id
          firstName
          lastName
          email
          phoneNumber
          password
          currentPlanStartAt
          curentPlanEndAt
          createdAt
          deletedAt
          HapticEffects {
            nextToken
            __typename
          }
          Role {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          modifiedAt
          planID
          updatedAt
          userRoleId
          __typename
        }
        createdAt
        updatedAt
        betaDataUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPlan = /* GraphQL */ `
  query GetPlan($id: ID!) {
    getPlan(id: $id) {
      id
      name
      price
      Users {
        items {
          id
          firstName
          lastName
          email
          phoneNumber
          password
          currentPlanStartAt
          curentPlanEndAt
          createdAt
          deletedAt
          HapticEffects {
            nextToken
            __typename
          }
          Role {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          modifiedAt
          planID
          updatedAt
          userRoleId
          __typename
        }
        nextToken
        __typename
      }
      currency
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPlans = /* GraphQL */ `
  query ListPlans(
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        Users {
          items {
            id
            firstName
            lastName
            email
            phoneNumber
            password
            currentPlanStartAt
            curentPlanEndAt
            createdAt
            deletedAt
            modifiedAt
            planID
            updatedAt
            userRoleId
            __typename
          }
          nextToken
          __typename
        }
        currency
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      email
      phoneNumber
      password
      currentPlanStartAt
      curentPlanEndAt
      createdAt
      deletedAt
      HapticEffects {
        items {
          id
          name
          createdAt
          updatedAt
          PointXAmplitude
          PointYAmplitude
          PointXFrequency
          pointYFrequency
          userID
          __typename
        }
        nextToken
        __typename
      }
      Role {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      modifiedAt
      planID
      updatedAt
      userRoleId
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        phoneNumber
        password
        currentPlanStartAt
        curentPlanEndAt
        createdAt
        deletedAt
        HapticEffects {
          items {
            id
            name
            createdAt
            updatedAt
            PointXAmplitude
            PointYAmplitude
            PointXFrequency
            pointYFrequency
            userID
            __typename
          }
          nextToken
          __typename
        }
        Role {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        modifiedAt
        planID
        updatedAt
        userRoleId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const usersByPlanID = /* GraphQL */ `
  query UsersByPlanID(
    $planID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByPlanID(
      planID: $planID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        email
        phoneNumber
        password
        currentPlanStartAt
        curentPlanEndAt
        createdAt
        deletedAt
        HapticEffects {
          items {
            id
            name
            createdAt
            updatedAt
            PointXAmplitude
            PointYAmplitude
            PointXFrequency
            pointYFrequency
            userID
            __typename
          }
          nextToken
          __typename
        }
        Role {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        modifiedAt
        planID
        updatedAt
        userRoleId
        __typename
      }
      nextToken
      __typename
    }
  }
`;

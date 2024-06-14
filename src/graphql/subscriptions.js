/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRole = /* GraphQL */ `
  subscription OnCreateRole($filter: ModelSubscriptionRoleFilterInput) {
    onCreateRole(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateRole = /* GraphQL */ `
  subscription OnUpdateRole($filter: ModelSubscriptionRoleFilterInput) {
    onUpdateRole(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteRole = /* GraphQL */ `
  subscription OnDeleteRole($filter: ModelSubscriptionRoleFilterInput) {
    onDeleteRole(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateHapticEffect = /* GraphQL */ `
  subscription OnCreateHapticEffect(
    $filter: ModelSubscriptionHapticEffectFilterInput
  ) {
    onCreateHapticEffect(filter: $filter) {
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
export const onUpdateHapticEffect = /* GraphQL */ `
  subscription OnUpdateHapticEffect(
    $filter: ModelSubscriptionHapticEffectFilterInput
  ) {
    onUpdateHapticEffect(filter: $filter) {
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
export const onDeleteHapticEffect = /* GraphQL */ `
  subscription OnDeleteHapticEffect(
    $filter: ModelSubscriptionHapticEffectFilterInput
  ) {
    onDeleteHapticEffect(filter: $filter) {
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
export const onCreateBetaData = /* GraphQL */ `
  subscription OnCreateBetaData($filter: ModelSubscriptionBetaDataFilterInput) {
    onCreateBetaData(filter: $filter) {
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
export const onUpdateBetaData = /* GraphQL */ `
  subscription OnUpdateBetaData($filter: ModelSubscriptionBetaDataFilterInput) {
    onUpdateBetaData(filter: $filter) {
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
export const onDeleteBetaData = /* GraphQL */ `
  subscription OnDeleteBetaData($filter: ModelSubscriptionBetaDataFilterInput) {
    onDeleteBetaData(filter: $filter) {
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
export const onCreatePlan = /* GraphQL */ `
  subscription OnCreatePlan($filter: ModelSubscriptionPlanFilterInput) {
    onCreatePlan(filter: $filter) {
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
export const onUpdatePlan = /* GraphQL */ `
  subscription OnUpdatePlan($filter: ModelSubscriptionPlanFilterInput) {
    onUpdatePlan(filter: $filter) {
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
export const onDeletePlan = /* GraphQL */ `
  subscription OnDeletePlan($filter: ModelSubscriptionPlanFilterInput) {
    onDeletePlan(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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

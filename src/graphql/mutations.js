/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRole = /* GraphQL */ `
  mutation CreateRole(
    $input: CreateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    createRole(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateRole = /* GraphQL */ `
  mutation UpdateRole(
    $input: UpdateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    updateRole(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteRole = /* GraphQL */ `
  mutation DeleteRole(
    $input: DeleteRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    deleteRole(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createHapticEffect = /* GraphQL */ `
  mutation CreateHapticEffect(
    $input: CreateHapticEffectInput!
    $condition: ModelHapticEffectConditionInput
  ) {
    createHapticEffect(input: $input, condition: $condition) {
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
export const updateHapticEffect = /* GraphQL */ `
  mutation UpdateHapticEffect(
    $input: UpdateHapticEffectInput!
    $condition: ModelHapticEffectConditionInput
  ) {
    updateHapticEffect(input: $input, condition: $condition) {
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
export const deleteHapticEffect = /* GraphQL */ `
  mutation DeleteHapticEffect(
    $input: DeleteHapticEffectInput!
    $condition: ModelHapticEffectConditionInput
  ) {
    deleteHapticEffect(input: $input, condition: $condition) {
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
export const createBetaData = /* GraphQL */ `
  mutation CreateBetaData(
    $input: CreateBetaDataInput!
    $condition: ModelBetaDataConditionInput
  ) {
    createBetaData(input: $input, condition: $condition) {
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
export const updateBetaData = /* GraphQL */ `
  mutation UpdateBetaData(
    $input: UpdateBetaDataInput!
    $condition: ModelBetaDataConditionInput
  ) {
    updateBetaData(input: $input, condition: $condition) {
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
export const deleteBetaData = /* GraphQL */ `
  mutation DeleteBetaData(
    $input: DeleteBetaDataInput!
    $condition: ModelBetaDataConditionInput
  ) {
    deleteBetaData(input: $input, condition: $condition) {
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
export const createPlan = /* GraphQL */ `
  mutation CreatePlan(
    $input: CreatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    createPlan(input: $input, condition: $condition) {
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
export const updatePlan = /* GraphQL */ `
  mutation UpdatePlan(
    $input: UpdatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    updatePlan(input: $input, condition: $condition) {
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
export const deletePlan = /* GraphQL */ `
  mutation DeletePlan(
    $input: DeletePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    deletePlan(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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

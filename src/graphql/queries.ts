/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      _deleted
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        _deleted
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTodos = /* GraphQL */ `
  query SyncTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        _deleted
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      imageUri
      publicKey
      _deleted
      createdAt
      updatedAt
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          _deleted
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
        name
        imageUri
        publicKey
        _deleted
        createdAt
        updatedAt
        chatRoomUser {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        imageUri
        publicKey
        _deleted
        createdAt
        updatedAt
        chatRoomUser {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getChatRoomUser = /* GraphQL */ `
  query GetChatRoomUser($id: ID!) {
    getChatRoomUser(id: $id) {
      id
      userID
      chatRoomID
      _deleted
      createdAt
      updatedAt
      user {
        id
        name
        imageUri
        publicKey
        _deleted
        createdAt
        updatedAt
        chatRoomUser {
          nextToken
          startedAt
        }
      }
      chatRoom {
        id
        lastMessageID
        untitledfield
        _deleted
        createdAt
        updatedAt
        chatRoomUsers {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          image
          forUserId
          permissionToShareFile
          requested
          _deleted
          updatedAt
        }
      }
    }
  }
`;
export const listChatRoomUsers = /* GraphQL */ `
  query ListChatRoomUsers(
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRoomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        chatRoomID
        _deleted
        createdAt
        updatedAt
        user {
          id
          name
          imageUri
          publicKey
          _deleted
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          untitledfield
          _deleted
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncChatRoomUsers = /* GraphQL */ `
  query SyncChatRoomUsers(
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChatRoomUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        chatRoomID
        _deleted
        createdAt
        updatedAt
        user {
          id
          name
          imageUri
          publicKey
          _deleted
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          untitledfield
          _deleted
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      lastMessageID
      untitledfield
      _deleted
      createdAt
      updatedAt
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          _deleted
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          chatRoomID
          image
          forUserId
          permissionToShareFile
          requested
          _deleted
          updatedAt
        }
        nextToken
        startedAt
      }
      lastMessage {
        id
        createdAt
        content
        userID
        chatRoomID
        image
        forUserId
        permissionToShareFile
        requested
        _deleted
        updatedAt
        user {
          id
          name
          imageUri
          publicKey
          _deleted
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          untitledfield
          _deleted
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lastMessageID
        untitledfield
        _deleted
        createdAt
        updatedAt
        chatRoomUsers {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          image
          forUserId
          permissionToShareFile
          requested
          _deleted
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncChatRooms = /* GraphQL */ `
  query SyncChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChatRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        lastMessageID
        untitledfield
        _deleted
        createdAt
        updatedAt
        chatRoomUsers {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          image
          forUserId
          permissionToShareFile
          requested
          _deleted
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      createdAt
      content
      userID
      chatRoomID
      image
      forUserId
      permissionToShareFile
      requested
      _version
      _deleted
      updatedAt
      user {
        id
        name
        imageUri
        publicKey
        _deleted
        createdAt
        updatedAt
        chatRoomUser {
          nextToken
          startedAt
        }
      }
      chatRoom {
        id
        lastMessageID
        untitledfield
        _deleted
        createdAt
        updatedAt
        chatRoomUsers {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          image
          forUserId
          permissionToShareFile
          requested
          _deleted
          updatedAt
        }
      }
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        content
        userID
        chatRoomID
        image
        forUserId
        permissionToShareFile
        requested
        _deleted
        updatedAt
        user {
          id
          name
          imageUri
          publicKey
          _deleted
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          untitledfield
          _deleted
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const messagesByChatRoom = /* GraphQL */ `
  query MessagesByChatRoom(
    $chatRoomID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatRoom(
      chatRoomID: $chatRoomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        content
        userID
        chatRoomID
        image
        forUserId
        permissionToShareFile
        requested
        _deleted
        updatedAt
        user {
          id
          name
          imageUri
          publicKey
          _deleted
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          untitledfield
          _deleted
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        content
        userID
        chatRoomID
        image
        forUserId
        permissionToShareFile
        requested
        _deleted
        updatedAt
        user {
          id
          name
          imageUri
          publicKey
          _deleted
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          untitledfield
          _deleted
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;

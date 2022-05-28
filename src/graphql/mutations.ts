/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      name
      imageUri
      publicKey
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      name
      imageUri
      publicKey
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      name
      imageUri
      publicKey
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createChatRoomUser = /* GraphQL */ `
  mutation CreateChatRoomUser(
    $input: CreateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    createChatRoomUser(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      user {
        id
        name
        imageUri
        publicKey
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
    }
  }
`;
export const updateChatRoomUser = /* GraphQL */ `
  mutation UpdateChatRoomUser(
    $input: UpdateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    updateChatRoomUser(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      user {
        id
        name
        imageUri
        publicKey
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
    }
  }
`;
export const deleteChatRoomUser = /* GraphQL */ `
  mutation DeleteChatRoomUser(
    $input: DeleteChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    deleteChatRoomUser(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      user {
        id
        name
        imageUri
        publicKey
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
    }
  }
`;
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      id
      lastMessageID
      untitledfield
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        updatedAt
        user {
          id
          name
          imageUri
          publicKey
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          untitledfield
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
      id
      lastMessageID
      untitledfield
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        updatedAt
        user {
          id
          name
          imageUri
          publicKey
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          untitledfield
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
      id
      lastMessageID
      untitledfield
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        updatedAt
        user {
          id
          name
          imageUri
          publicKey
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          untitledfield
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
      _lastChangedAt
      updatedAt
      user {
        id
        name
        imageUri
        publicKey
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
      _lastChangedAt
      updatedAt
      user {
        id
        name
        imageUri
        publicKey
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
      _lastChangedAt
      updatedAt
      user {
        id
        name
        imageUri
        publicKey
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }
    }
  }
`;

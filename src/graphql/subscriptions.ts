/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateChatRoomUser = /* GraphQL */ `
  subscription OnCreateChatRoomUser {
    onCreateChatRoomUser {
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
export const onUpdateChatRoomUser = /* GraphQL */ `
  subscription OnUpdateChatRoomUser {
    onUpdateChatRoomUser {
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
export const onDeleteChatRoomUser = /* GraphQL */ `
  subscription OnDeleteChatRoomUser {
    onDeleteChatRoomUser {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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

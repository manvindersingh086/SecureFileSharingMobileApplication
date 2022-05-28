// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, User, ChatRoomUser, ChatRoom, Message } = initSchema(schema);

export {
  Todo,
  User,
  ChatRoomUser,
  ChatRoom,
  Message
};
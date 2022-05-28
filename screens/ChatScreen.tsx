import { StyleSheet, View, Text, FlatList } from 'react-native';
import ChatListItem from '../components/ChatListItem/Index';

import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import NewMessageButton from '../components/NewMessageButton';

import ChatRooms from '../data/ChatRooms';

import { useEffect, useState } from 'react';
import { getUser } from './queries';

import {
  API,
  graphqlOperation,
  Auth,
} from "aws-amplify";

export default function TabOneScreen() {

  const [ChatRooms, setChatRooms] = useState([])
  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();
        console.warn(userInfo.attributes.sub)
        const userData = await API.graphql(
          graphqlOperation(
            getUser, {
              id: userInfo.attributes.sub,
            }
          )
        )
        console.warn(userData)
        setChatRooms(userData.data.getUser.chatRoomUser.items)
      } catch (e) {
        console.log(e);
      }
    }
    fetchChatRooms();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={ChatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item.chatRoom} />}
        keyExtractor={(item) => item.id}
      />

       <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

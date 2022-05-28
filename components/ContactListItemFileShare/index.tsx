import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import { User } from "../../types";
import styles from "./style";
import { useNavigation } from '@react-navigation/native';

import {
  API,
  graphqlOperation,
  Auth,
} from "aws-amplify";
import {
  createChatRoom,
  createChatRoomUser
} from '../../src/graphql/mutations';


export type ContactListItemProps = {
    user: User
}

import { getUser } from '../../src/graphql/queries';

import {
  createMessage
} from '../../src/graphql/mutations'

const ContactListItem = (props: ContactListItemProps) => {
    const {user,imageShare} = props

    
    const navigation = useNavigation()
    

    const onClick = async () => {
        try {
          
          const userID = user.id;
          
          const userInfo = await Auth.currentAuthenticatedUser();
          let alreadyChatRoom = false;
          let chatRoomID;
          

          const userData = await API.graphql(
            graphqlOperation(
              getUser, {
                id: userInfo.attributes.sub,
              }
            )
          )

          const otherUserData = await API.graphql(
            graphqlOperation(
              getUser, {
                id: userID,
              }
            )
          )

          console.warn(userData.data.getUser.chatRoomUser.items);

          for(let i=0; i< userData.data.getUser.chatRoomUser.items.length; i++)
          {
            for(let k=0; k< otherUserData.data.getUser.chatRoomUser.items.length; k++)
            {
              if(userData.data.getUser.chatRoomUser.items[i].chatRoomID == otherUserData.data.getUser.chatRoomUser.items[k].chatRoomID)
              {
                alreadyChatRoom = true;
                chatRoomID = userData.data.getUser.chatRoomUser.items[i].chatRoomID;
              }
            }
          }

          if (alreadyChatRoom == true)
          {

            
            const newMessageData = await API.graphql(
              graphqlOperation(
                createMessage, {
                  input: {
                    content: '',
                    image:imageShare,
                    userID: userInfo.attributes.sub,
                    chatRoomID,
                    permissionToShareFile:"false"
                  }
                }
              )
            )
  
            navigation.navigate('ChatRoom', {
              id: chatRoomID,
              name: "Hardcoded name",
            })
          }
          else
          {
            //  1. Create a new Chat Room
          const newChatRoomData = await API.graphql(
            graphqlOperation(
              createChatRoom, {
                input: {
                  lastMessageID: "zz753fca-e8c3-473b-8e85-b14196e84e16"
                }
              }
            )
          )
    
          if (!newChatRoomData.data) {
            console.log(" Failed to create a chat room");
            return;
          }
    
          const newChatRoom = newChatRoomData.data.createChatRoom;
    
          // 2. Add `user` to the Chat Room
          await API.graphql(
            graphqlOperation(
              createChatRoomUser, {
                input: {
                  userID: user.id,
                  chatRoomID: newChatRoom.id,
                }
              }
            )
          )
    
          //  3. Add authenticated user to the Chat Room
          
          await API.graphql(
            graphqlOperation(
              createChatRoomUser, {
                input: {
                  userID: userInfo.attributes.sub,
                  chatRoomID: newChatRoom.id,
                }
              }
            )
          )
    
          navigation.navigate('ChatRoomFileShare', {
            id: newChatRoom.id,
            name: "Hardcoded name",
          })
          }
          
    
        } catch (e) {
          console.log(e);
        }
      }
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.lefContainer}>
                <Image source={{ uri: user.imageUri }} style={styles.avatar} />
                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{ user.name }</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
        
    )
}

export default ContactListItem
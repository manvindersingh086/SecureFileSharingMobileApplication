import React,{useEffect, useState} from 'react'
import { Message } from '../../types'
import { Text, View, TouchableOpacity, Alert, Button } from 'react-native'
import styles from './style'
import moment from 'moment'
import {S3Image} from 'aws-amplify-react-native'
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import {
    API,
    Auth,
    graphqlOperation,
    Storage
  } from 'aws-amplify'

import { getMessage, listMessages } from './../../src/graphql/queries';
import {
    updateMessage
  } from '../../src/graphql/mutations'
import {useNavigation} from '@react-navigation/native'
import { onUpdateMessage } from '../../src/graphql/subscriptions'

export type ChatMessageProps = {
    message: Message,
    myId: String
}


const ChatMessage = (props: ChatMessageProps) => {
    const { message, myId } = props;
    const [sendRequest, setSendRequest] = useState(false);
    const [permissionF, setPermissionF] = useState(false);
    const navigation = useNavigation();
    let oldMessageData={};
  
    const isMessage = () => {
        return message.user.id == myId
    }

    const isPer = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
        return message.user.id == userInfo.attributes.info; 
          

    }

    const shareImage = async (imag) => {
        let imgname = imag;
        
        

        navigation.navigate('ContactScreenFileShare',{
          imageShare:imag
        });
        
    }

    
    const permissionRequest = async () => {
       
        const messageId = message.id;
        let permissionToShareFile = true;
        try {
            const newMessageData = await API.graphql(
              graphqlOperation(
                updateMessage, {
                  input: {
                    id:messageId,
                    requested:"true"
                  }
                }
              )
            )
          } catch (e) {
            console.log(e);
          }
    }

    useEffect( () => {
        const subscription = API.graphql(
          graphqlOperation(onUpdateMessage)
        ).subscribe({
          next: (data) => {
            const updateMessage = data.value.data.onUpdateMessage;
          }
        });
    
        return () => subscription.unsubscribe();
      },[sendRequest])

    const versionUser = async (Id:any) => {
        try {
            
            oldMessageData = await API.graphql(
                graphqlOperation(
                    getMessage, {
                        id: Id,
                      }
                  )
              )
       

        }
        catch (e) {
            console.log(e);
          }
    }

    const updatePermission = async () => {
        try {
                
            oldMessageData = await API.graphql(
                graphqlOperation(
                    getMessage, {
                        id: message.id
                       }
                  )
              )
            let version = oldMessageData.data.getMessage._version;
                
                const newMessageData = await API.graphql(
                    graphqlOperation(
                      updateMessage, {
                        input: {
                          id:message.id,
                          permissionToShareFile:"true",
                          requested:"false",
                          _version:version
                        }
                      }
                    )
                  )
                
                console.warn(newMessageData)
           
          } catch (e) {
            console.log(e);
          }
        }

    return (
        <View style={styles.container}>
            <View style= {[
            styles.messageBox, {
                backgroundColor: isMessage() ? '#DCF8C5' : 'white',
                marginLeft: isMessage() ? 50 : 0,
                marginRight: isMessage() ? 0 : 50
            }
        ]}>
           

            {message.image && (<S3Image imgKey={message.image} style={{width:100, height: 100}} />)}
            {!isMessage() && (<Text style={styles.name}>{message.user.name}</Text>)}
            {message.image && !isMessage() && (message.permissionToShareFile == "true" || message.permissionToShareFile == "Yes") && <View style={styles.share}>
            <TouchableOpacity onPress={() => shareImage(message.image)}>
                  <SimpleLineIcons name="share" size={24} color="black" />
            </TouchableOpacity>
            </View>}
            {((!isMessage() && message.image && (message.permissionToShareFile == "false" ) && <View><TouchableOpacity onPress={() => permissionRequest(message.id)}>
                  <SimpleLineIcons name="lock" size={24} color="black" />
            </TouchableOpacity></View>) || ((!isMessage() && message.image && message.permissionToShareFile == "true" )) && <View><TouchableOpacity onPress={() => permissionRequest(message.id)}>
                     <AntDesign name="unlock" size={24} color="black" />
            </TouchableOpacity></View>)}

            {isMessage() && (message.requested == "true") && <View>
                <Text>Would You like to give permission to share a file to the user</Text>
                <Button title="Approved" onPress={() => updatePermission(message.id,"true")}/>
                <Button title="Cancelled" onPress={() => updatePermission(message.id,"false")}/>
                </View>}
            
            <Text style={styles.message}>{message.content}</Text>
            <Text style = {styles.time}>{moment(message.createdAt).fromNow()}</Text>
        </View>
        </View>
    )
}

export default ChatMessage
import React,{useEffect, useState} from 'react'
import {Share, View, Text, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, Alert} from 'react-native'
import styles from './style'
import {
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome5,
    Entypo,
    Fontisto,
    Feather,
    AntDesign
  } from '@expo/vector-icons';

  import {
    API,
    Auth,
    graphqlOperation,
    Storage
  } from 'aws-amplify'

  import {
    createMessage,
    updateChatRoom,
  } from '../../src/graphql/mutations'

  import * as DocumentPicker from 'expo-document-picker'
  import 'react-native-get-random-values'
  import {v4 as uuidV4} from 'uuid'
  import * as ImagePicker from 'expo-image-picker'
  import CryptoES from "crypto-es";
  import { DataStore } from "@aws-amplify/datastore";
  import { ChatRoomUser } from "../../src/models";
  import { ChatRoom, Message } from "../../src/models";


const InputBox = (props) => {
 
    const { chatRoomID } = props
    const [message, setMessage] = useState('');
    const [myUserId, setMyUserId] = useState(null);
    const [fileLocal, setFileLocal] = useState(null);
    const [image, setImage] = useState(null);
    let permissionToShareFile;

    useEffect(() => {
      const fetchUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
        setMyUserId(userInfo.attributes.sub);
      }
      fetchUser();


      //IMAGE PICKER FUNCTION START
      (async () => {
        const libraryResponse= await ImagePicker.useMediaLibraryPermissions();

        if(libraryResponse != 'granted')
        {
          alert('Sorry! we need a permission to select images to make this work.')
        }
      })

      //IMAGE PICKER FUNCTION END
    }, [])

  

    const onSendPress = async () => {
      
      try {

        
        console.warn(ChatRoomUser);
        const users = (await DataStore.query(ChatRoomUser))
      .filter((cru) => cru.chatRoom?.id === chatRoomID.id)
      .map((cru) => cru.user);

    console.warn("users", users);
       
        const newMessageData = await API.graphql(
          graphqlOperation(
            createMessage, {
              input: {
                content: message,
                userID: myUserId,
                chatRoomID
              }
            }
          )
        )
      
      } catch (e) {
        console.log(e);
      }
      setMessage('');
    }

    const onPress = () => {
      if(image)
        sendImage();
      else if(message)
          onSendPress();
      }
  /*
    const onShare = async () => {
         
          let result = await DocumentPicker.getDocumentAsync({});
          
          
          setFileLocal(result.uri);
          console.warn(fileLocal)
          const response = await fetch(result.uri);
          const blob = await response.blob();
          const {key}= await Storage.put(`${uuidV4()}.pdf`,blob);

          try {
       
            const newMessageData = await API.graphql(
              graphqlOperation(
                createMessage, {
                  input: {
                    content: message,
                    file:key,
                    userID: myUserId,
                    chatRoomID
                  }
                }
              )
            )
          
          } catch (e) {
            console.log(e);
          }
          //alert(result.uri);
          //console.warn(blob);
    };
*/

//IMAGE PICKER FUNCTIONs START

const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.cancelled) {
    setImage(result.uri);
  }
};

const sendImage = async () => {

  // let permissionToShareFile;
  // await Alert.alert(
  //   "Permission to share file with another user",
  //   "Would you like to give permission to user to share this file with another user?",
  //   [
  //     {
  //       text: "Cancel",
  //       onPress: () => {
  //         permissionToShareFile = "No"
  //         saveImage(permissionToShareFile);
  //       },
  //       style: "cancel"
  //     },
  //     { text: "OK", onPress: () => {
  //       permissionToShareFile = "Yes" 
  //       saveImage(permissionToShareFile);
  //     }}
  //   ]
  // );

  saveImage(false);
    
      
}

const saveImage = async (permissionToShareFile:any) => {

  const blob = await getImageBlob();

      const encdata = CryptoES.AES.encrypt(JSON.stringify(blob), 'secret key 123').toString();
      console.warn(encdata);
      console.log(encdata);

      const {key}= await Storage.put(`${uuidV4()}.png`,blob);

      const user = await Auth.currentAuthenticatedUser();
      try {
       
        const newMessageData = await API.graphql(
          graphqlOperation(
            createMessage, {
              input: {
                content: message,
                image:key,
                userID: myUserId,
                chatRoomID,
                permissionToShareFile
              }
            }
          )
        )
      
      } catch (e) {
        console.log(e);
      }

      resetFields();

}

const getImageBlob = async () => {
      if(!image)
      {
        return null;
      }
      const response = await fetch(image);
      const blob = await response.blob();
      return blob;
}

const resetFields = () => {
  setMessage("");
  setImage(null);
}
//IMAGE PICKER FUNCTION END
    return (
        <KeyboardAvoidingView>
         {image && (
           <View style={styles.sendImageContainer}>
             <Image source={{uri : image}} style={{width:100, height:100}} />
             <TouchableOpacity onPress={() => setImage(null)}>
               <AntDesign name="close" size={24} color="black" style={{margin:5}} />
             </TouchableOpacity>
             
           </View>
         )}
        <View style={styles.row}>
         
        <View style={styles.mainContainer}>
        
        
        
          <TextInput
            placeholder={"Type a message"}
            style={styles.textInput}
            multiline
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity onPress={pickImage}>
            <Feather name="image" size={24} color="#595959" style={styles.icon} />
          </TouchableOpacity>

          
          {/* <TouchableOpacity onPress={onShare}>
              <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
          </TouchableOpacity> */}
        </View>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.buttonContainer}>
             <MaterialIcons name="send" size={28} color="white" />
          </View>
        </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    )
  
}

export default InputBox
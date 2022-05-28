import React from "react";
import { View, Text, Pressable, Alert } from "react-native";
import {
    Auth,
    API,
    DataStore,
    graphqlOperation,
  } from 'aws-amplify';
import { getUser } from '../src/graphql/queries';
import { updateUser } from '../src/graphql/mutations';
import { generateKeyPair } from "../utils/crypto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User as UserModel } from "../src/models"

const PRIVATE_KEY = "PRIVATE_KEY";

const Settings = () => {

    const logOut = async () => {
        await DataStore.clear();
        Auth.signOut();
    }

    const updateKeyPair = async () => {

        const {publicKey, secretKey} = generateKeyPair();
        await AsyncStorage.setItem(PRIVATE_KEY, secretKey.toString());
        const userData = await Auth.currentAuthenticatedUser();
        console.log(userData.attributes.sub);

        // const userD = await API.graphql(
        //     graphqlOperation(
        //       getUser,
        //       { id: userData.attributes.sub }
        //       )
        //   )
        //console.log(userD.data.getUser.name)
        //const dbUser = await DataStore.query(UserModel, userData.attributes.sub);
        const variables = {
            input:{ id: userData.attributes.sub,publicKey:publicKey.toString() } , // key is "input" based on the mutation above
          };
          
        await API.graphql(
            graphqlOperation(
                updateUser,variables
              )
          )

      

         
        // if (dbUser) {
        // Alert.alert(dbUser.toString());
        // return;
        
    
    
    }

    return (
        <View>
            <Pressable onPress={updateKeyPair}
            style= {{
                backgroundColor:"white",
                height: 50,
                margin: 10,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center"
            }}
            >
                <Text>Update KeyPair</Text>
            </Pressable>

            <Pressable onPress={logOut} style= {{
                backgroundColor:"white",
                height: 50,
                margin: 10,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center"
            }}
            >
            <Text>Logout</Text>
            </Pressable>       
        </View>
    )
}

export default Settings
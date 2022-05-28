import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import ContactListItem from '../components/ContactListItem/Index';

import {
  Auth,
  API,
  graphqlOperation,
} from 'aws-amplify';

import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import NewMessageButton from '../components/NewMessageButton';


import { listUsers } from '../src/graphql/queries';

export default function Contacts() {

  const [users, setUsers] = useState([])

  useEffect( () => {

    const fetchUsers = async () => {

          try {


              const userData = await API.graphql(graphqlOperation(listUsers))
              const userInfo = await Auth.currentAuthenticatedUser();

              //REPLACING AUTHENTICATED USER FROM THE LIST OF CONTACTS
              let userModDta=[];
              let k = 0;
              for(let i=0; i < userData.data.listUsers.items.length;i++)
              {
                if(userInfo.attributes.sub != userData.data.listUsers.items[i].id)
                {
                 // console.warn(userData.data.listUsers.items[i])
                  userModDta[k] = userData.data.listUsers.items[i];
                  k++;
                }
              }
            
              setUsers(userModDta)
          }
          catch(e)
          {
            console.log(e)
          }
    }
    fetchUsers();
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
       style={{width:'100%'}}
       data={users}
       renderItem={({item}) => <ContactListItem user={item}
       keyExtractor={(item) => item.id}
       />} />

       
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

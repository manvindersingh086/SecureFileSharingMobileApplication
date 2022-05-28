import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import ContactListItemFileShare from '../components/ContactListItemFileShare/index';
import {useRoute} from '@react-navigation/native'
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
  const route = useRoute();

  useEffect( () => {

    const fetchUsers = async () => {

          try {

          
              
              const userData = await API.graphql(graphqlOperation(listUsers))
              
              console.warn(userData)
            
              setUsers(userData.data.listUsers.items)
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
       renderItem={({item}) => <ContactListItemFileShare user={item} imageShare={route.params.imageShare}
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

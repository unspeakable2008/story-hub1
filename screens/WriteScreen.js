import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {Header} from 'react-native-elements';
export default class WriteScreen extends React.Component {

render() {
    return(
        <Header
             centerComponent={{
            text: 'Write Screen',
            style: { color: 'cyan', fontSize: 20 },
             }}>
                 <View style = {styles.container}>
                     <TextInput>
                        <Text>Read Story</Text> 
                     </TextInput>
                     <TextInput>

                     </TextInput>
                     <TextInput>
                    
                     </TextInput>
                     
                 </View>
                 
        </Header>
    )
}
}
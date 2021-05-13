import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadScreen extends React.Component{
render(){
    return(
        <View style = {styles.container}>
        <Text>ReadStory</Text>
        </View>
    )
}
}
const styles = StyleSheet.create({
container: {
    justifyContent:"center",
    flex:1,
    alignItems:"center"
}
})

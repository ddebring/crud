import React, { Component } from 'react'
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import { postBlogs } from '../actions';
import { connect } from 'react-redux';

class Post extends Component {
    state = {
        title:"",
        content:"",

    }
    submit = () => {
        this.props.postBlogs(this.state.title,this.state.content)
        this.setState({
            title:"",
            content:"",
        })
        this.props.navigation.navigate('NavStack')

    }
    render() {
        return (
          <View style={styles.container}>
            <Text> Post </Text>
            <TextInput
              placeholder="title"
              onChangeText={(title) => this.setState({title})}
              value={this.state.title}
              style={{
                marginTop: 20,
                height: 40,
                borderColor: '#ddd',
                borderWidth: 1,
                borderRadius: 5,
              }}
            />
            <TextInput
              placeholder="content"
              onChangeText={(content) => this.setState({content})}
              value={this.state.content}
              style={{
                marginTop: 20,
                height: 100,
                borderColor: '#ddd',
                borderWidth: 1,
                borderRadius: 5,
              }}
            />
            <Button title="submit" onPress={this.submit}/>
          </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        justifyContent: "center",
        padding:30,
        backgroundColor:"#fff",


    },

});
export default connect(null, {postBlogs})(Post);

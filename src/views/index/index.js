import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'

export default class Index extends Component {
    render(h) {
        return (
            <View style={[style.noLoginBtn]}>
                <Text>这是index页面</Text>
                <Button title="没有登录，去登录"></Button>
                <Button title="登录了，去首页"></Button>
            </View>
        )
    }
}
const style = StyleSheet.create({
    noLoginBtn: {
        marginBottom: 15
    }
})

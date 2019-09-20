import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import AddTodo from './containers/AddTodo'
import VisibleTodo from './containers/VisibleTodos'

export default class TodoApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AddTodo />

                <View>
                    <VisibleTodo />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    }
})

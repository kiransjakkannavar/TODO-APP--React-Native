import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from "react-redux"

class AddTodo extends Component {

    state = {
        text: ""
    }

    addTodo = (text) => {
        this.props.dispatch({ type: 'ADD_TODO', text })
        this.setState({ text: '' })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Eg. Create Video'
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />

                <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                    <View style={styles.iconContainer}>
                        <Icon
                            name="md-add"
                            size={30}
                            style={{ color: '#de9595', padding: 10 }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(AddTodo)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20
    },
    textInput: {
        borderWidth: 1,
        backgroundColor: '#eaeaea',
        borderColor: '#f2f2e1',
        height: 50,
        flex: 1,
        padding: 10
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 50,
        backgroundColor: '#eaeaea'
    }
})

import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { tableStyles } from '../styles'

export default class TableHeader extends Component {
    renderHeader = () => {
        return this.props.headers.map((value, index) => {
            return (
                <View
                    style={tableStyles.head}
                    key={index}
                >
                    <Text style={tableStyles.headText}>{value}</Text>
                </View>
            )
        })
    }

    render() {
        return (
            <View style={tableStyles.headerContainer}>
                {this.renderHeader()}
            </View>
        )
    }
}

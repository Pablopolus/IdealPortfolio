import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { tableStyles } from '../styles'

export default class PercentagesTable extends Component {
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

    renderBody = () => {
        return this.props.percentages.map((value, index) => {
            return (
                <View
                    key={index}
                    style={tableStyles.cell}
                >
                    <Text style={tableStyles.text}>{value}%</Text>
                </View>
            )
        })
    }

    render() {
        return (
            <View style={tableStyles.container}>
                <View style={tableStyles.headerContainer}>
                    {this.renderHeader()}
                </View>
                <View style={tableStyles.row}>
                    {this.renderBody()}
                </View>
            </View>
        )
    }
}

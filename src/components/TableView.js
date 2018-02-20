import _ from 'lodash'
import React, { Component } from 'react'
import { View, Text } from 'react-native'


import TableHeader from './TableHeader'
import { tableStyles } from '../styles'

export default class TableView extends Component {
    renderHeader = () => {
        const tableHead = ['Risk Level', ...this.props.headers]

        return tableHead.map((value, index) => {
            return (
                <View
                    style={tableStyles.head}
                    key={index}
                >
                    <Text style={{ alignItems: 'center' }}>{value}</Text>
                </View>
            )
        })
    }

    renderBody = () => {
        const { selected } = this.props

        return _.map(this.props.data, (data, riskValue) => {
            const selectedStyle = selected === parseInt(riskValue, 10)
                ? { backgroundColor: 'yellow' }
                : {}
            const percentages = [riskValue, ...data]
            return (
                <View key={riskValue} style={[tableStyles.row, selectedStyle]}>
                    {percentages.map((value, index) => {
                        return (
                            <View
                                key={index}
                                style={tableStyles.cell}
                            >
                                <Text style={tableStyles.text}>{value}</Text>
                            </View>
                        )
                    })}
                </View>
            )
        })
    }

    render() {
        const headers = ['Risk Level', ...this.props.headers]
        return (
            <View style={tableStyles.container}>
                <TableHeader headers={headers} />
                <View style={{ flexDirection: 'column' }}>
                    {this.renderBody()}
                </View>
            </View>
        )
    }
}

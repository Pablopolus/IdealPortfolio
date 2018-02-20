import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { chartStyles } from '../styles'

const { legendBackground, legendContainer } = chartStyles

export default class ChartLegend extends Component {
    renderLegends() {        
        const { values } = this.props
        return this.props.labels.map((label, index) => {
            const legendColor = {
                backgroundColor: this.props.colors[index]
            }

            return (
                <View key={index} style={legendContainer}>
                    <View style={[legendBackground, legendColor]} />
                    <Text>
                        {label} - {values[index]}%
                    </Text>
                </View>
            )
        })
    }

    render() {
        return (
            <View>
                {this.renderLegends()}
            </View>
        )
    }
}

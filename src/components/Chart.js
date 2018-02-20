import React, { Component } from 'react'
import { View } from 'react-native'
import Pie from 'react-native-pie'

import ChartLegend from './ChartLegend'

export default class Chart extends Component {
    render() {
        const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800']

        return (
            <View>
                <View style={{ alignSelf: 'center' }}>
                    <Pie
                        radius={130}
                        innerRadius={65}
                        series={this.props.data}
                        colors={sliceColor}
                    />
                </View>

                <ChartLegend
                    labels={this.props.labels}
                    colors={sliceColor}
                    values={this.props.data}
                />
            </View >
        )
    }
}

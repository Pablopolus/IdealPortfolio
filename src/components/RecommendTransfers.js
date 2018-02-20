import React from 'react'
import { View, Text } from 'react-native'

import { commonStyles } from '../styles'

const RecommendTransfers = ({ listItems }) => {
    renderList = () => {
        return listItems.map(((item, index) => {
            return (
                <View key={index}>
                    <Text style={commonStyles.listText}>
                        * {item}
                    </Text>
                </View>
            )
        }))
    }

    return (
        <View style={commonStyles.listContainer}>
            {this.renderList()}
        </View>
    )
}

export default RecommendTransfers

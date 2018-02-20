import React, { Component } from 'react'
import { View } from 'react-native'
import { Header } from 'react-native-elements'

import Home from './Home'
import { headerStyles } from '../styles'

const { title } = headerStyles

export default class IdealPortfolio extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    centerComponent={{ text: 'Ideal Portfolio', style: title }}
                />
                <Home />
            </View>
        )
    }
}

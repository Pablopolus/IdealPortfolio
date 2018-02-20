import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Slider, Button } from 'react-native-elements'

import Chart from '../components/Chart'
import TableView from '../components/TableView'
import { riskChanged } from '../actions'
import { commonStyles, sliderStyles } from '../styles'

import data from '../../assets/investmentsRisks.json'

const { titleSection, container, button } = commonStyles

class Home extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Risk Selection',
            headerRight: <Button
                title="Portfolio"
                onPress={() => navigation.navigate('investments')}
                backgroundColor="rgba(0,0,0,0)"
                color="white"
                textStyle={{ fontSize: 14 }}
            />
        }
    }

    constructor(props) {
        super(props)

        this.state = {
            showChart: false
        }
    }

    onSliderChange = (value) => {
        this.props.riskChanged(value)
    }

    onButtonPress = () => {
        this.setState({ showChart: !this.state.showChart })
    }

    renderView() {
        const chartValues = data.risks[this.props.riskLevel]

        if (this.state.showChart) {
            return <Chart data={chartValues} labels={data.investments} />
        }

        return (
            <TableView
                data={data.risks}
                selected={this.props.riskLevel}
                headers={data.investments}
            />
        )
    }

    render() {
        const { riskLevel } = this.props

        return (
            <ScrollView style={container}>
                <View>
                    <Text style={titleSection}>
                        Select your risk level: {riskLevel}
                    </Text>
                    <View style={sliderStyles.container}>
                        <Slider
                            maximumValue={10}
                            minimumValue={1}
                            step={1}
                            value={riskLevel}
                            onValueChange={this.onSliderChange}
                            thumbTouchSize={{ width: 45, height: 45 }}
                            trackStyle={{ height: 7 }}
                        />
                    </View>
                    {this.renderView()}
                </View>
                <View>
                    <TouchableOpacity
                        style={button}
                        onPress={this.onButtonPress}
                    >
                        <Text>Show {this.state.showChart ? 'Table' : 'Chart'}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = ({ riskLevel }) => ({ riskLevel })

export default connect(mapStateToProps, { riskChanged })(Home)

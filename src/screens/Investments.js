import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
// import { Input } from 'react-native-elements'
import { TextInputMask } from 'react-native-masked-text'

import PercentagesTable from '../components/PercentagesTable'
import TableHeader from '../components/TableHeader'
import RecommendTransfers from '../components/RecommendTransfers'
import { commonStyles, inputStyle } from '../styles'
import data from '../../assets/investmentsRisks.json'

class Investments extends Component {
    static navigationOptions = () => {
        return {
            title: 'Personalized Portfolio'
        }
    }

    constructor(props) {
        super(props)

        this.state = this.setInitialState()
    }

    onInvestmentsChange = (investment, value) => {
        const newValue = {
            value,
            difference: this.state.data[investment].difference,
            newAmount: this.state.data[investment].newAmount,
            percentage: this.state.data[investment].percentage
        }
        const newData = {
            ...this.state.data,
            [investment]: newValue
        }
        this.setState({ data: newData })
    }

    getFloatValue = (number) => {
        return number.replace('US$', '').replace('.', '').replace(',', '.')
    }

    setInitialState = () => {
        const initialState = {}
        const idealInvestments = data.risks[this.props.riskLevel]

        data.investments.map(((label, index) => {
            initialState[label] = {
                value: '0',
                difference: '',
                newAmount: '',
                percentage: idealInvestments[index]
            }
        }))

        // initialState.showModal = false

        return { data: initialState, transfers: [] }
    }

    updateStateValues = () => {
        let totalCash = 0

        _.map(this.state.data, investmentData => {
            const number = this.getFloatValue(investmentData.value)
            totalCash += parseFloat(number)
        })

        const newState = {}

        _.map(this.state.data, (investmentData, investmentCategory) => {
            const value = investmentData.value
            const newAmount = totalCash * (investmentData.percentage / 100)
            const differenceFloat = newAmount - this.getFloatValue(value)
            const difference = `${differenceFloat.toFixed(2)}`
            const newValue = {
                value,
                newAmount,
                difference,
                percentage: investmentData.percentage
            }
            newState[investmentCategory] = newValue
        })

        this.setState({ data: newState }, this.calculateTransfers)
    }

    calculateTransfers = () => {
        const removeInvestments = []
        const addInvestments = []
        const transfers = []

        _.map(this.state.data, (investmentData, investmentCategory) => {
            if (parseFloat(investmentData.difference) < 0) {
                removeInvestments.push({ ...investmentData, investmentCategory })
            } else if (investmentData.difference > 0) {
                addInvestments.push({ ...investmentData, investmentCategory })
            }
        })

        removeInvestments.sort((a, b) => parseFloat(a.difference) - parseFloat(b.difference))
        addInvestments.sort((a, b) => parseFloat(b.difference) - parseFloat(a.difference))

        removeInvestments.forEach(toRemoveInvestment => {
            let firstToAdd = addInvestments[0]
            let investmentResult = parseFloat(firstToAdd.difference) + parseFloat(toRemoveInvestment.difference)

            if (investmentResult < 0) {
                let transferAmmount = toRemoveInvestment.difference - investmentResult.toFixed(2)
                transferAmmount = transferAmmount.toFixed(2)
                transferAmmount = transferAmmount.replace('-', '$')
                transfers.push(`Transfer ${transferAmmount} from ${toRemoveInvestment.investmentCategory} to ${firstToAdd.investmentCategory}`)
                addInvestments.shift()
                const removeInvestment = toRemoveInvestment

                while (addInvestments.length > 0 && investmentResult < 0) {
                    removeInvestment.difference = investmentResult.toFixed(2)
                    firstToAdd = addInvestments[0]
                    investmentResult = parseFloat(firstToAdd.difference) + parseFloat(removeInvestment.difference)
                    transferAmmount = toRemoveInvestment.difference
                    transferAmmount = transferAmmount.replace('-', '$')
                    transfers.push(`Transfer ${transferAmmount} from ${removeInvestment.investmentCategory} to ${firstToAdd.investmentCategory}`)
                }
            } else {
                let transferAmmount = toRemoveInvestment.difference
                transferAmmount = transferAmmount.replace('-', '$')
                transfers.push(`Transfer ${transferAmmount} from ${toRemoveInvestment.investmentCategory} to ${firstToAdd.investmentCategory}`)
                addInvestments[0].difference = investmentResult.toFixed(2)
            }
        })

        this.setState({ transfers })
    }

    rebalanceInvestments = () => {
        this.updateStateValues()
    }

    renderInputs = () => {
        return data.investments.map((label, index) => {
            let differenceStyle

            if (parseFloat(this.state.data[label].difference) < 0) {
                differenceStyle = { color: 'red' }
            } else if (parseFloat(this.state.data[label].difference) > 0) {
                differenceStyle = { color: 'green' }
            } else {
                differenceStyle = { color: 'black' }
            }

            return (
                <View key={index} style={inputStyle.containerStyle}>
                    <Text style={inputStyle.labelStyle}>
                        {label}
                    </Text>
                    <TextInputMask
                        type={'money'}
                        options={{ unit: 'US$' }}
                        style={inputStyle.textStyle}
                        value={this.state.data[label].value}
                        onChangeText={value => this.onInvestmentsChange(label, value)}
                    />
                    <TextInput
                        style={[inputStyle.textStyle, differenceStyle]}
                        value={this.state.data[label].difference}
                        autoCorrect={false}
                        editable={false}
                    />
                    <TextInputMask
                        type={'money'}
                        options={{ unit: 'US$' }}
                        style={[inputStyle.textStyle, inputStyle.textBlue]}
                        value={this.state.data[label].newAmount}
                        editable={false}
                    />
                </View>
            )
        })
    }

    render() {
        const headers = ['', 'Current', 'Difference', 'New Amount']
        return (
            <ScrollView style={commonStyles.container}>
                <View>
                    <Text style={commonStyles.titleSection}>
                        Risk Level: {this.props.riskLevel}
                    </Text>
                    <PercentagesTable
                        headers={data.investments}
                        percentages={data.risks[this.props.riskLevel]}
                    />
                </View>

                <View>
                    <TableHeader headers={headers} />
                    <View>
                        {this.renderInputs()}
                    </View>
                </View>

                <View>
                    <TouchableOpacity
                        style={commonStyles.button}
                        onPress={this.rebalanceInvestments}
                    >
                        <Text>Rebalance</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <RecommendTransfers listItems={this.state.transfers} />
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = ({ riskLevel }) => ({ riskLevel })

export default connect(mapStateToProps, null)(Investments)

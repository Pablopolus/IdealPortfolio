import { StackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import Investments from '../screens/Investments'

export default StackNavigator(
    {
        home: {
            screen: Home
        },
        investments: {
            screen: Investments
        }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
            },
            headerBackTitleStyle: {
                fontSize: 14,
            }
        },
    }
)


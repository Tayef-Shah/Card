// TODO:
// for icons in bottom tab: https://www.youtube.com/watch?v=jlVCIYIZUrk

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import ContactStack from '../routes/contactStack';
import Home from '../screens/home';
import UserProfile from '../screens/userProfile';

const TabNavigator = createMaterialBottomTabNavigator(
    {
        CardOrganization: {
            screen: ContactStack,
            navigationOptions: {
                tabBarLabel: 'Cards',
                // tabBarIcon: ({ tintColor }) => (
                //     <View>
                //         <Icon style={[{color: tintColor}]} size={25} name={'ios-card'} />
                //     </View>
                // ),
            }
        },
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                      <Icon style={[{color: tintColor}]} size={25} name={'address-card'} />
                    </View>
                  ),
            }
        },
        UserProfile: {
            screen: UserProfile,
            navigationOptions: {
                tabBarLabel: 'User Profile',
                // tabBarIcon: ({ tintColor }) => (
                //     <View>
                //         <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
                //     </View>
                // ),
            }
        }
    },
    {
      initialRouteName: 'Home',
      activeColor: '#ffffff',
      inactiveColor: '#bda1f7',
      barStyle: { backgroundColor: '#6948f4' },
    }
  );
  
  export default createAppContainer(TabNavigator);
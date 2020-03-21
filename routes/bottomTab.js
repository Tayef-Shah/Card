// TODO:
// for icons in bottom tab: https://www.youtube.com/watch?v=jlVCIYIZUrk

import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import MyCard from '../screens/myCard';
import ContactStack from '../routes/contactStack';
import Home from '../screens/home';

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home
        },
        MyCard: {
            screen: ContactStack
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
import {createStackNavigator} from 'react-navigation-stack';
import MyCard from '../screens/myCard';
import ContactList from '../screens/contactList';

const screens = {
    MyCard: {
        screen: MyCard
    },
    ContactList: {
        screen: ContactList
    }
}

const ContactStack = createStackNavigator(screens);
// export default createAppContainer(ContactStack);

export default ContactStack;
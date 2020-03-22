import {createStackNavigator} from 'react-navigation-stack';
import ContactList from '../screens/contactList';
import CardOrganization from '../screens/cardOrganization';

const screens = {
    CardOrganization: {
        screen: CardOrganization
    },
    ContactList: {
        screen: ContactList
    }
}

const ContactStack = createStackNavigator(screens);
// export default createAppContainer(ContactStack);

export default ContactStack;
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { StackNavigator } from "react-navigation";
import ContactDetailsScreen from "./src/screens/ContactDetailsScreen";
import ContactListScreen from "./src/screens/ContactListScreen";
import AddContactScreen from "./src/screens/AddContactScreen";

const ContactApp = StackNavigator({
  ContactList: { screen: ContactListScreen },
  ContactDetails: { screen: ContactDetailsScreen },
  AddContact: { screen: AddContactScreen }
});

export default ContactApp;

import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

export default class ContactListScreen extends React.Component {
  static navigationOptions = {
    title: "Contacts"
  };

  contacts = [
    { id: 1, name: "Azri", mobile: "0123456789", email: "azri@example.com" },
    {
      id: 2,
      name: "Farhana",
      mobile: "0123456789",
      email: "farhana@example.com"
    },
    { id: 3, name: "Sarah", mobile: "0123456789", email: "sarah@example.com" },
    { id: 4, name: "Ayah", mobile: "0123456789", email: "ayah@example.com" },
    { id: 5, name: "Mama", mobile: "0123456789", email: "mama@example.com" }
  ];

  viewContactDetails = item => {
    const { navigate } = this.props.navigation;

    navigate("ContactDetails", { contact: item });
  };

  renderItem = ({ item }) =>
    <TouchableHighlight
      style={styles.item}
      onPress={() => this.viewContactDetails(item)}
    >
      <View style={styles.itemContainer}>
        <Image
          source={require("../../images/man.png")}
          style={styles.itemAvatar}
        />
        <Text style={styles.itemText}>
          {item.name}
        </Text>
      </View>
    </TouchableHighlight>;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.contacts}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  list: {
    width: "100%"
  },
  item: {
    padding: 20,
    borderBottomColor: "#e3e3e3",
    borderBottomWidth: 1
  },
  itemContainer: {
    flexDirection: "row"
  },
  itemAvatar: {
    width: 30,
    height: 30,
    marginRight: 20,
    borderRadius: 15
  },
  itemText: {
    fontSize: 20
  }
});

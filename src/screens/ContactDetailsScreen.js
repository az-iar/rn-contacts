import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default class ContactDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.contact.name}`
  });

  render() {
    const { state } = this.props.navigation;
    const { contact } = state.params;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require("../../images/man.png")} />
        </View>
        <View style={styles.card}>
          <Text style={styles.cardDetails}>
            Name: {contact.name}
          </Text>
          <Text style={styles.cardDetails}>
            Mobile No: {contact.mobile}
          </Text>
          <Text style={[styles.cardDetails, { marginBottom: 0 }]}>
            Email: {contact.email}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  header: { height: 150, padding: 20 },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 30
  },
  cardDetails: {
    marginBottom: 15,
    fontSize: 16
  }
});

import React from "react";
import {
  Button,
  Image,
  Platform,
  StyleSheet,
  TextInput,
  View
} from "react-native";

export default class AddContactScreen extends React.Component {
  static navigationOptions = {
    title: "New",
    headerRight: Platform.select({
      ios: <Button title="Save" />
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 20
          }}
        >
          <Image
            source={require("../../images/man.png")}
            style={styles.avatar}
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Name"
            style={styles.textInput}
            returnKeyType="next"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            returnKeyType="next"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Mobile No."
            style={styles.textInput}
            returnKeyType="done"
            underlineColorAndroid="transparent"
          />
        </View>
        {Platform.select({
          android: <Button title="Save" />
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  avatar: {
    width: 100,
    height: 100
  },
  textInputContainer: {
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 10
  },
  textInput: {
    height: 30
  }
});

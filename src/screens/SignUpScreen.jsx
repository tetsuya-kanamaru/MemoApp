import React, { useState } from "react";
// eslint-disable-next-line
import { View, StyleSheet, TextInput, Alert } from "react-native";
import firebase from "firebase";
import { translateErrors } from "../utils";

import Button from "../components/Button";
import EnteranceTitle from "../components/EnteranceTitle";
// import EnterForm from "../components/EnterForm";
import Footer from "../components/Footer";

export default function SignUpScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlePress() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user.uid);
        navigation.reset({
          index: 0,
          routes: [{ name: "MemoList" }],
        });
      })
      .catch((error) => {
        const errorMsg = translateErrors(error.code);
        Alert.alert(errorMsg.title, errorMsg.description);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <EnteranceTitle title="Sign Up" />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />

        <Button label="Submit" onPress={handlePress} />
        <Footer
          text="Already registered?"
          link="Log In."
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "LogIn" }],
            });
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: "#ddd",
    borderWidth: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    marginBottom: 16,
    color: "gray",
  },
});

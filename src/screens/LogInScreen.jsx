import React from "react";
// eslint-disable-next-line
import { View, Text, StyleSheet, TextInput } from "react-native";

import Button from "../components/Button";
import EnteranceTitle from "../components/EnteranceTitle";
import EnterForm from "../components/EnterForm";
import Footer from "../components/Footer";

export default function LogInScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <EnteranceTitle title="Log In" />
        <EnterForm email="Email Address" password="Password" />
        <Button
          label="Submit"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "MemoList" }],
            });
          }}
        />
        <Footer
          text="Not registered?"
          link="Sign up here!"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "SignUp" }],
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
});

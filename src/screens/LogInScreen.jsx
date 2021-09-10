import React from "react";
// eslint-disable-next-line
import { View, Text, StyleSheet, TextInput } from "react-native";

import Appbar from "../components/AppBar";
import Button from "../components/Button";
import EnteranceTitle from "../components/EnteranceTitle";
import EnterForm from "../components/EnterForm";
import Footer from "../components/Footer";

export default function LogInScreen() {
  return (
    <View style={styles.container}>
      <Appbar />
      <View style={styles.inner}>
        <EnteranceTitle title="Log In" />
        <EnterForm email="Email Address" password="Password" />
        <Button label="submit" />
        <Footer text="Not registered?" link="Sign up here!" />
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

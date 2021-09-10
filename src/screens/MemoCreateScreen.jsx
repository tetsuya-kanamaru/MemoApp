import React from "react";
// eslint-disable-next-line
import { View, StyleSheet, TextInput } from "react-native";

import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/keyboardSafeView";
import TextForm from "../components/TextForm";

export default function MemoCreateScreen() {
  return (
    <KeyboardSafeView style={styles.container}>
      <AppBar />
      <TextForm value="" />
      <CircleButton name="check" />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

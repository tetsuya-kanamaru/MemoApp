import React from "react";
// eslint-disable-next-line
import { View, StyleSheet, TextInput } from "react-native";

import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/keyboardSafeView";
import TextForm from "../components/TextForm";

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardSafeView style={styles.container}>
      <TextForm value="" />
      <CircleButton
        name="check"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React from "react";
// eslint-disable-next-line
import { View, StyleSheet } from "react-native";

import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/keyboardSafeView";

import TextForm from "../components/TextForm";

export default function MemoEditScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardSafeView style={styles.container}>
      <TextForm value="買い物リスト" />
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

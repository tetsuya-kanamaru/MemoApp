import React from "react";
// eslint-disable-next-line
import { View, ScrollView, Text, StyleSheet } from "react-native";

import CircleButton from "../components/CircleButton";
import MemoDetailHeader from "../components/MemoDetailHeader";
import MemoDetailScrollView from "../components/MemoDetailScrollView";

export default function MemoDetailScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <MemoDetailHeader title="買い物リスト" date="2021年9月8日 10:00" />
      <MemoDetailScrollView
        text="買い物リスト
        書体やレイアウトなどを確認するために用います。本文用なので使い方を間違えると不自然に見えることもありますので要注意。"
      />
      <CircleButton
        style={{ top: 60, bottom: "auto" }}
        name="edit-2"
        onPress={() => {
          navigation.navigate("MemoEdit");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

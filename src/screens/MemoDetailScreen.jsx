import React from "react";
// eslint-disable-next-line
import { View, ScrollView, Text, StyleSheet } from "react-native";

import Appbar from "../components/AppBar";
import CircleButton from "../components/CircleButton";

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <Appbar />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2021年9月8日 10:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          買い物リスト 書体やレイアウトなどを確認するために用います。
          本文用なので使い方を間違えると不自然に見えることもありますので要注意。
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160, bottom: "auto" }} name="edit-2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  memoHeader: {
    backgroundColor: "#467fd3",
    height: 96,
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
  },
  memoDate: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

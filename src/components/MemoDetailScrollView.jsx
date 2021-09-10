import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { string } from "prop-types";

export default function MemoDetailScrollView(props) {
  const { text } = props;
  return (
    <ScrollView style={styles.memoBody}>
      <Text style={styles.memoText}>{text}</Text>
    </ScrollView>
  );
}

MemoDetailScrollView.propTypes = {
  text: string,
};

MemoDetailScrollView.defaultProps = {
  text: "",
};

const styles = StyleSheet.create({
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

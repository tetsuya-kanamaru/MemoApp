import React from "react";
import { Text, StyleSheet } from "react-native";
import { string } from "prop-types";

export default function EnteranceTitle(props) {
  const { title } = props;
  return <Text style={styles.title}>{title}</Text>;
}

EnteranceTitle.propTypes = {
  title: string.isRequired,
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },
});

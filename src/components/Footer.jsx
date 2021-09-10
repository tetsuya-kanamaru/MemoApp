import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { string } from "prop-types";

export default function Footer(props) {
  const { text, link } = props;
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{text}</Text>
      <Text style={styles.footerLink}>{link}</Text>
    </View>
  );
}

Footer.propTypes = {
  text: string.isRequired,
  link: string.isRequired,
};

const styles = StyleSheet.create({
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: "#467fd3",
  },
  footer: {
    flexDirection: "row",
  },
});

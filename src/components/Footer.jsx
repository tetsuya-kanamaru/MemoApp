import React from "react";
// eslint-disable-next-line
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { string, func } from "prop-types";

export default function Footer(props) {
  const { text, link, onPress } = props;
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{text}</Text>
      <TouchableOpacity>
        <Text style={styles.footerLink} onPress={onPress}>
          {link}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

Footer.propTypes = {
  text: string.isRequired,
  link: string.isRequired,
  onPress: func,
};

Footer.defaultProps = {
  onPress: null,
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

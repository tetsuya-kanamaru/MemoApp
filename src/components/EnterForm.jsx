import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { string } from "prop-types";

export default function EnterForm(props) {
  const { email, password } = props;
  return (
    <>
      <TextInput style={styles.input} value={email} />
      <TextInput style={styles.input} value={password} />
    </>
  );
}

EnterForm.propTypes = {
  email: string.isRequired,
  password: string.isRequired,
};

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    height: 48,
    borderColor: "#ddd",
    borderWidth: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    marginBottom: 16,
  },
});

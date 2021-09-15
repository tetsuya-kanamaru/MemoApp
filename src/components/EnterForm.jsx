import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { string } from "prop-types";

export default function EnterForm(props) {
  const { email, password } = props;
  const [enterEmail, setEnterEmail] = useState("");
  const [enterPassword, setEnterPassword] = useState("");
  return (
    <>
      <TextInput
        style={styles.input}
        value={enterEmail}
        onChangeText={(text) => {
          setEnterEmail(text);
        }}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder={email}
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.input}
        value={enterPassword}
        onChangeText={(text) => {
          setEnterPassword(text);
        }}
        autoCapitalize="none"
        placeholder={password}
        secureTextEntry
        textContentType="password"
      />
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
    color: "gray",
  },
});

import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const HandleInputExample = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(' ');

  const validateEmail = (text) => {
    setEmail(text);
    if (!text.includes('@')) {
      setError('Invalid Email address');
    } else {
      setError('');
    }
  };

  return (
    <BasicTextInput
      firstName={firstName}
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
      email={email}
      setEmail={validateEmail}
      phoneNumber={phoneNumber}
      setPhoneNumber={setPhoneNumber}
      password={password}
      setPassword={setPassword}
      error={error}
    />
  );
};

const BasicTextInput = ({
  firstName, setFirstName,
  lastName, setLastName,
  email, setEmail,
  phoneNumber, setPhoneNumber,
  password, setPassword,
  error
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        maxLength={10}
        onChangeText={(value) => setFirstName(value)}
      />
      <Text style={styles.displayText}>First Name Typed: {firstName}</Text>
      <Text style={styles.displayText}>Remaining: {10 - firstName.length}</Text>

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        maxLength={15}
        onChangeText={(value) => setLastName(value)}
      />
      <Text style={styles.displayText}>Last Name Typed: {lastName}</Text>
      <Text style={styles.displayText}>Remaining: {15 - lastName.length}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        keyboardType="email-address"
        onChangeText={setEmail}
        maxLength={30}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Text style={styles.displayText}>Email Typed: {email}</Text>
      <Text style={styles.displayText}>Remaining: {30 - email.length}</Text>

      <TextInput
        style={styles.input}
        value="Phone Number"
        autoFocus={true}
        maxLength={25}
        onChangeText={(value) => setPhoneNumber(value)}
      />
      <Text style={styles.displayText}>Phone Number Typed: {phoneNumber}</Text>
      <Text style={styles.displayText}>Remaining: {25 - phoneNumber.length}</Text>

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        maxLength={10}
        onChangeText={(value) => setPassword(value)}
      />
      <Text style={styles.displayText}>Password Typed: {password}</Text>
      <Text style={styles.displayText}>Remaining: {10 - password.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'black',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
  displayText: {
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default HandleInputExample;

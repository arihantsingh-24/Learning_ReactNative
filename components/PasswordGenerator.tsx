import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

import * as YUP from "yup";
import { Formik } from "formik";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const passwordSchema = YUP.object().shape({
  passwordLength: YUP.number()
    .min(4, "password should have atleast lenght of 4")
    .max(16, "password should have atmost lenght of 16")
    .required("lenght is required"),
});

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [isPasswordGenerated, setisPasswordGenerated] = useState(false);

  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLenght: number) => {
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const number = "1234567890";
    const symbol = "!@#$%^&*?,.<>()[]{}";

    let characterList = "";
    if (uppercase) characterList += uppercasechars;
    if (lowercase) characterList += lowercasechars;
    if (numbers) characterList += number;
    if (symbols) characterList += symbol;

    const passwordResult = createPassword(characterList, passwordLenght);

    setPassword(passwordResult);
    setisPasswordGenerated(true);
  };

  const createPassword = (Character: string, passwordLength: number) => {
    let result = "";
    for (let i = 0; i < passwordLength; i++) {
      let index = Math.floor(Math.random() * Character.length);
      result += Character.charAt(index);
    }
    console.log(result);
    return result;
  };

  const resetPassword = () => {
    setPassword("");
    setisPasswordGenerated(false);
    setLowercase(true);
    setUppercase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={{ alignItems: "center" }}>
        <Text style={styles.headingText}>PasswordGenerator</Text>
        <View style={styles.formContainer}>
          <Formik
            initialValues={{ passwordLength: "" }}
            validationSchema={passwordSchema}
            onSubmit={(values) => {
              console.log(values);
              generatePasswordString(+values.passwordLength);
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.error}>{errors.passwordLength}</Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange("passwordLength")}
                    placeholder="Ex. 8"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Lowercase</Text>
                  <BouncyCheckbox
                    disableText
                    isChecked={lowercase}
                    onPress={() => setLowercase(!lowercase)}
                    fillColor="green"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include UpperCase</Text>
                  <BouncyCheckbox
                    disableText
                    isChecked={uppercase}
                    onPress={() => setUppercase(!uppercase)}
                    fillColor="yellow"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Number</Text>
                  <BouncyCheckbox
                    disableText
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="violet"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>
                  <BouncyCheckbox
                    disableText
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="orange"
                  />
                </View>

                <View style={styles.formAction}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.generateBtn}
                    onPress={()=>{
                      handleSubmit();}
                    }
                  >
                    <Text>GeneratePassword</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.resetbtn}
                    onPress={() => {
                      handleReset();
                      resetPassword();
                    }}
                  >
                    <Text>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPasswordGenerated ? (
          <View style={styles.card}>
            <Text style={styles.result}>Result</Text>
            <Text style={styles.copy}>Click to copy</Text>
            <Text selectable={true} style={styles.generatedpass}>
              {password}
            </Text>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};

export default PasswordGenerator;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "bold",
    margin: 20,
  },
  card: {
    marginTop: 20,
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  formContainer: {
    width: "90%",
    padding: 20,
    backgroundColor: "#0f172a",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  inputColumn: {
    flexDirection: "column",
    flex: 1,
  },
  inputStyle: {
    backgroundColor: "#334155",
    color: "#ffffff",
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    marginTop: 8,
  },
  error: {
    color: "#ef4444",
    fontSize: 12,
    marginTop: 4,
  },
  formAction: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  generateBtn: {
    backgroundColor: "#2563eb",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  resetbtn: {
    backgroundColor: "#ef4444",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },
  copy: {
    color: "#94a3b8",
    fontSize: 14,
    marginBottom: 10,
  },
  generatedpass: {
    fontSize: 16,
    color: "#38bdf8",
    backgroundColor: "#0f172a",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    marginTop: 10,
  },
});

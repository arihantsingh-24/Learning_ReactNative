import React from "react";

import { SafeAreaView, ScrollView } from "react-native";

import Flatcard from "./components/Flatcard";
import Elevatedcard from "./components/Elevatedcard";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";
import ContactList from "./components/ContactList";
import PasswordGenerator from "./components/PasswordGenerator";

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <PasswordGenerator/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

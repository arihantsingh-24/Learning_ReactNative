/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";

import { SafeAreaView, ScrollView } from "react-native";

import Flatcard from "./components/Flatcard";
import Elevatedcard from "./components/Elevatedcard";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";
import ContactList from "./components/ContactList";

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcard />
        <Elevatedcard />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

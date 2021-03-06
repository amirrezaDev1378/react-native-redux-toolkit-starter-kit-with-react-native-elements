import React from "react";
import type { Node } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import { store } from "./src/app/store";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./src/app/feature/counterSlice";
import {Counter} from "./src/app/feature/Counter"

const AppData = () => {
  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
        <Counter />
      </SafeAreaView>
  );
};


const App = () => {
  return (
    <Provider store={store}>
      <AppData />
    </Provider>
  );

};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;

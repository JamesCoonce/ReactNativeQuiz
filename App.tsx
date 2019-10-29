import React from 'react';
import Home from './src/screens/homeScreen'
import initStore from "./src/redux/reducers";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import {
  ApplicationProvider,
  IconRegistry,
  Layout
} from "react-native-ui-kitten";
import { useScreens } from "react-native-screens";
import { Provider } from "react-redux";
import AppContainer from './src/screens/appNavigator';
useScreens();

export default class App extends React.Component {
  render() {
    let store = initStore();
    return (
      <Provider store={store}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
          <AppContainer />
        </ApplicationProvider>
      </Provider>
    );
  }
}


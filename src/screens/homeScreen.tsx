import React from "react";
import { Layout } from "react-native-ui-kitten";
import HomePage from "../designs/HomePage";
const HomeScreen = props => {
    return (
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <HomePage />
      </Layout>
    );
};

export default HomeScreen;

import React from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import { Layout, Text, Button } from "react-native-ui-kitten";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import styles from "./styles";
import { getAllQuestions, resetQuiz } from "../redux/reducers/quizReducer";

class HomePage extends React.Component<PageProps> {
  componentDidMount() {
    this.props.resetQuiz();
    this.props.getAllQuestions();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the Trivia Challenge!</Text>
        <Text>You will be presented with 10 True or False questions.</Text>
        <Text>Can you score 100%?</Text>
        <Button
          onPress={() => this.props.navigation.push("Quiz")}
        >
          BEGIN
        </Button>
      </View>
    );
  }
}

interface StateFromProps {
}

interface DispatchFromProps {
  getAllQuestions: any,
  resetQuiz: any
}

interface Props {
  navigation: any
}

type PageProps = StateFromProps & DispatchFromProps & Props

const mapStateToProps = (state: any) => ({
});
const mapDispatchToProps = (dispatch: any) => ({
  getAllQuestions: () => dispatch(getAllQuestions),
  resetQuiz: () => dispatch(resetQuiz())
});

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(
  HomePage
));

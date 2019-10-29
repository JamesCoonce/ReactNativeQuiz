import React from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import { Layout, Button } from "react-native-ui-kitten";
import { Result } from "../redux/reducers/interfaces";
import QuizPage from "../designs/QuizPage";

class QuizScreen extends React.Component<any> {
  getResults() {
    this.props.navigation.navigate("ResultsScreen");
  }
  render() {
    let { questions, currentQuestion } = this.props;
    let question = questions[currentQuestion];
    return (
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        {question ? (
          <>
            <QuizPage
              question={question}
              currentQuestion={currentQuestion}
              questions={questions}
            />
          </>
        ) : (
          <>
            <Text>Questions are currently not available! Try Refeshing the app!</Text>
            <Button onPress={() => this.props.navigation.navigate("Home")}>Refresh!</Button>
          </>
        )}
        
      </Layout>
    );
  }
}

interface StateFromProps {
  currentQuestion: number;
  questions: Result[];
}

const mapStateToProps = (state: any) => ({
  currentQuestion: state.quizReducer.currentQuestion,
  questions: state.quizReducer.questions
});

export default connect(mapStateToProps)(QuizScreen);

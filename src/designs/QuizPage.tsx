import React from "react";
import { View, TouchableOpacity, WebView } from "react-native";
import { Layout, Text, Button } from "react-native-ui-kitten";
import { connect } from 'react-redux';
import { withNavigation } from "react-navigation";
import styles from "./styles";
import { setCurrent, updatePoints, answerQuestion } from "../redux/reducers/quizReducer";
import { Result } from "../redux/reducers/interfaces";

const Entities = require("html-entities").AllHtmlEntities;
const entities = new Entities();
class QuizPage extends React.Component<QuestionProps> {
  chooseAnswer(choice: String) {
    const {
      setCurrent,
      answerQuestion,
      updatePoints,
      currentQuestion,
      questions
    } = this.props;
    let answer = questions[currentQuestion].correct_answer;
    if (choice === answer) {
      answerQuestion(questions[currentQuestion].question, true);
      updatePoints();
    } else {
      answerQuestion(questions[currentQuestion].question, false);
    }
    setCurrent();
    if (currentQuestion >= questions.length - 1) {
      this.props.navigation.navigate("Results");
    }
  }

  renderQuestion(question: string){
    return entities.decode(question);
  }
  render(){
    let { question, currentQuestion } = this.props;
    
    return (
      <View style={styles.container}>
        <Text>{question.category}</Text>
        <View style={styles.box}>
          <Text>
            <>{this.renderQuestion(question.question)}</>
          </Text>
        </View>
        <Text>
          <>{currentQuestion + 1}</> of 10
        </Text>
        <Button style={styles.button} onPress={() => this.chooseAnswer("True")}>
          True
        </Button>
        <Button
          style={styles.button}
          onPress={() => this.chooseAnswer("False")}
        >
          False
        </Button>
      </View>
    );
  }
} 

interface StateFromProps {
  currentQuestion: number;
  questions: Result[];
}

interface DispatchFromProps {
    answerQuestion(question: string, correct: boolean): any,
    setCurrent: any,
    updatePoints: any
}

interface Props {
    navigation: any,
    question: Result,
    history: any
}

type QuestionProps = StateFromProps & DispatchFromProps & Props

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
  answerQuestion: (question: string, correct: boolean) => dispatch(answerQuestion(question, correct)),
  setCurrent: () => dispatch(setCurrent()),
  updatePoints: () => dispatch(updatePoints())
});

export default withNavigation<any, any>(connect(mapStateToProps, mapDispatchToProps)(
  QuizPage
));

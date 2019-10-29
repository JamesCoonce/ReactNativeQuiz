import React from "react";
import { connect } from "react-redux";
import { View, FlatList, TouchableOpacity } from "react-native";
import {
  Layout,
  Text,
  Button,
  List,
  ListItem,
  Icon
} from "react-native-ui-kitten";
import { withNavigation } from "react-navigation";
import styles from "./styles";
import { QuizResult } from "../redux/reducers/interfaces";
import { resetQuiz } from "../redux/reducers/quizReducer";

const Entities = require("html-entities").AllHtmlEntities;
const entities = new Entities();
const CorrectIcon = style => <Icon {...style} name="plus-circle" />;
const IncorrectIcon = style => <Icon {...style} name="minus-circle" />;

const renderItem = ({ item, index }) => {
  let question = entities.decode(item.question);
  if (item.correct) {
    return (
      <>
        <ListItem description={question} icon={CorrectIcon} />
      </>
    );
  } else {
    return (
      <>
        <ListItem description={question} icon={IncorrectIcon} />
      </>
    );
  }
}

class ResultsPage extends React.Component<ResultPageProps> {
  resetTest() {
    this.props.resetQuiz();
    this.props.navigation.navigate("Home");

  }
  render() {
    let { points, quizResults } = this.props;
    return (
      <View>
        <Text>You scored</Text>
        <Text>
          <>{points}</>/10
        </Text>
        <List style={styles.list} data={quizResults} renderItem={renderItem} />
        <Button onPress={() => this.props.navigation.push("Home")}>
          PLAY AGAIN?
        </Button>
      </View>
    );
  }
} 

interface StateFromProps {
  points: number;
  quizResults: QuizResult[];
}

interface DisptachFromProps {
  resetQuiz: any
}

interface Props {
    navigation: any
}

type ResultPageProps = StateFromProps & DisptachFromProps & Props;

const mapStateToProps = (state: any) => ({
  points: state.quizReducer.points,
  quizResults: state.quizReducer.quizResults
});

const mapDispatchToProps = (dispatch: any) => ({
  resetQuiz: () => dispatch(resetQuiz())
});

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ResultsPage)
);

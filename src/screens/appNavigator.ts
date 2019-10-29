import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./homeScreen";
import QuizScreen from './quizScreen';
import ResultsScreen from "./resultsScreen";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen},
    Quiz: { screen: QuizScreen},
    Results: { screen: ResultsScreen}
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
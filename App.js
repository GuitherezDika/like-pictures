import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from  'react-navigation-stack'
import SquareScreen from './src/components/SquareScreen';

const mainDisplay = createStackNavigator({
  Display: SquareScreen,

}, {
  initialRouteName: 'Display',
  defaultNavigationOptions: {
    title: 'My Pictures'
  }
});

export default createAppContainer(mainDisplay);


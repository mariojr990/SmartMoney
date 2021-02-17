import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from './Pages/Main'
import NewEntry from './Pages/Main/index'
import Report from './Pages/Report/index'

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      NewEntry,
      Report,
    },
    {
      initialRouteName: 'Main',
      backBehavior: 'history',
    },
  ),
);

export default Routes;

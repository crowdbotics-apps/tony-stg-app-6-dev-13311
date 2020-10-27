import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen213260Navigator from '../features/BlankScreen213260/navigator';
import CopyOfBlankScreen013180Navigator from '../features/CopyOfBlankScreen013180/navigator';
import BlankScreen013172Navigator from '../features/BlankScreen013172/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen213260: { screen: BlankScreen213260Navigator },
CopyOfBlankScreen013180: { screen: CopyOfBlankScreen013180Navigator },
BlankScreen013172: { screen: BlankScreen013172Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

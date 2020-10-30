import React from 'react';

import { useTheme } from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

type BarIconProps = {
  icon: string;
  focused: boolean;
  color: string;
  size: number;
};

const StudyTabs = () => {
  const { colors } = useTheme();

  const BarIcon: React.FC<BarIconProps> = ({ icon, color, size, focused }) => (
    <Ionicons
      name={icon}
      color={focused ? colors.primary : color}
      size={size}
    />
  );

  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: colors.boxFooter,
        activeBackgroundColor: colors.boxFooterDark,
        inactiveTintColor: colors.primaryIconDisabled,
        activeTintColor: colors.titleText,
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: (props) => <BarIcon icon="ios-easel" {...props} />,
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: (props) => <BarIcon icon="ios-heart" {...props} />,
        }}
      />
    </Navigator>
  );
};

export default StudyTabs;

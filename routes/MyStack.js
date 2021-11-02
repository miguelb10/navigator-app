import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import Home from '../screens/Home';
import Task from '../screens/Task';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          headerStyle: {
            backgroundColor: 'red'
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Task" component={Task} 
        options={({route}) => ({title:route.params.task})}
      />
    </Stack.Navigator>
  )
}

export default MyStack

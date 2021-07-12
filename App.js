import 'react-native-gesture-handler';
import * as React from 'react';
// import Todo from './app/pages/Todo'
// import Dm from './app/pages/Dm'
// import User from './app/pages/User';
import { StyleSheet, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Welcome from './app/pages/Welcome';
import SignUp from './app/pages/SignUp';
import Login from './app/pages/Login';
import Main from './app/stacks/Main.stack';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" headerMode='none'>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// import 'react-native-gesture-handler';
// import * as React from 'react';
// import Todo from './app/pages/Todo'
// import Dm from './app/pages/Dm'
// import User from './app/pages/User';
// import { StyleSheet, View, Text, Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

// import { faList, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

// const Tab = createBottomTabNavigator();




// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         tabBarOptions={{
//           showLabel: false,
//           style: {
//             position: 'relative',
//             bottom: 25,
//             left: '5%',
//             elevation: 0,
//             backgroundColor: '#ccc',
//             borderRadius: 15,
//             height: 90,
//             width: '90%',
//             alignItems: 'center',
//             justifyContent: 'center',
//             ...styles.shadow
//           }
//         }}>
//         <Tab.Screen name="Todo" component={Todo} options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={{
//               alignItems: 'center',
//               justifyContent: 'center',
//               top: 10,
//             }}>
//               <FontAwesomeIcon icon={faList} size={25} color={focused ? 'rgba(110, 130, 232, 1)' : 'black'} />
//               <Text style={{ color: focused ? 'rgba(110, 130, 232, 1)' : 'black', fontWeight: '600' }}>Todo</Text>
//             </View>
//           )
//         }} />
//         <Tab.Screen name="Dm" component={Dm} options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={{
//               alignItems: 'center',
//               justifyContent: 'center',
//               top: 10,
//             }}>
//               <FontAwesomeIcon icon={faHome} size={25} color={focused ? 'rgba(110, 130, 232, 1)' : 'black'} />
//               <Text style={{ color: focused ? 'rgba(110, 130, 232, 1)' : 'black', fontWeight: '600' }}>Dm</Text>
//             </View>
//           )
//         }} />
//         <Tab.Screen name="User" component={User} options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={{
//               alignItems: 'center',
//               justifyContent: 'center',
//               top: 10,
//             }}>
//               <FontAwesomeIcon icon={faUser} size={25} color={focused ? 'rgba(110, 130, 232, 1)' : 'black'} />
//               <Text style={{ color: focused ? 'rgba(110, 130, 232, 1)' : 'black', fontWeight: '600' }}>User</Text>
//             </View>
//           )
//         }} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
// const styles = StyleSheet.create({
//   shadow: {
//     shadowColor: '#7F5DF0',
//     shadowOffset: {
//       width: 0,
//       height: 10
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.5,
//     elevation: 5,

//   }
// })
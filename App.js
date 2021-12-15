import React, { useState } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

import { Icon } from 'react-native-elements';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';
import * as Paragraphs from './explanations.js';
import * as Quiz from './quiz.js';

const Stack = createStackNavigator();


const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={StartScreen}
          options={{
            title: 'Home',
            headerStyle: { backgroundColor: 'white' },
            headerTitleStyle: { fontSize: 16 },
            cardStyle: { backgroundColor: 'transparent' },
          }}
        />

        <Stack.Screen
          name='Legislative'
          component={LegislativeScreen}
          options={{
            title: 'Legislative Branch',
            headerStyle: { backgroundColor: 'white' },
            headerTitleStyle: { fontSize: 16 },
            cardStyle: { backgroundColor: 'transparent' },
          }}
        />
        <Stack.Screen
          name='Executive'
          component={ExecutiveScreen}
          options={{
            title: 'Executive Branch',
            headerStyle: { backgroundColor: 'white' },
            headerTitleStyle: { fontSize: 16 },
            cardStyle: { backgroundColor: 'transparent' },
          }}
        />

        <Stack.Screen
          name='Judicial'
          component={JudicialScreen}
          options={{
            title: 'Judicial Branch',
            headerStyle: { backgroundColor: 'white' },
            headerTitleStyle: { fontSize: 16 },
            cardStyle: { backgroundColor: 'transparent' },
          }}
        />

        <Stack.Screen
          name='Quiz'
          component={TakeQuiz}
          options={{
            title: 'Test',
            headerStyle: { backgroundColor: 'white' },
            headerTitleStyle: { fontSize: 16 },
            cardStyle: { backgroundColor: 'transparent' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const StartScreen = ({ navigation }) => (
  <View style={[styles.Container, { alignItems: 'center', flexDirection: 'column', backgroundColor:'#FAFAFA' }]}>
    <View style={{ marginTop: 20, flex: 1 }}>
      <Image
        source={require('./Assets/flag_California.png')}
        style={[styles.flagImage]}
      />
    </View>
    <View style={{ backgroundColor: '#FAFAFA', flex: 4 }}>
      <Text style={[styles.p1, { paddingTop: 10 }]}>Government of California</Text>

      <TouchableOpacity
        style={[styles.btn, { backgroundColor: '#43A047' }]}
        onPress={() => { navigation.navigate('Legislative') }}>
        <Text style={[styles.p1, { color: 'white' }]}>Legislative Branch</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.btn, { backgroundColor: '#EF5350' }]}
        onPress={() => { navigation.navigate('Executive') }}>
        <Text style={[styles.p1, { color: 'white' }]}>Executive Branch</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.btn, { backgroundColor: '#795548' }]}
        onPress={() => { navigation.navigate('Judicial') }}>
        <Text style={[styles.p1, { color: 'white' }]}>Judicial Branch</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.btn, { backgroundColor: '#212121' }]}
        onPress={() => { navigation.navigate('Quiz') }}>
        <Text style={[styles.p1, { color: 'white' }]}>Quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.btn, { backgroundColor: '#1E88E5' }]}
        onPress={() => Linking.openURL('https://www.ca.gov/government/')}>
        <Text style={[styles.p1, { color: 'white' }]}>CA.gov</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const LegislativeScreen = ({ navigation }) => {
  return (
    <ScrollView style={[styles.Container, {backgroundColor:'#FAFAFA'}]}>
      <View style={[styles.Container]}>
        <Text style={[styles.p1]}>
          How does California's Legislature Work?
        </Text>
        <View style={{ backgroundColor: '#43A047', width: '100%', height: 5, marginTop: 5, marginBottom: 5, }} />
        <Paragraphs.legislativeBranchInfo />
      </View>
    </ScrollView>
  );
}

const ExecutiveScreen = ({ navigation }) => {
  return (
    <ScrollView style={[styles.Container, {backgroundColor:'#FAFAFA'}]}>
      <View style={[styles.Container]}>
        <Text style={[styles.p1]}>
          California's Executive Branch
        </Text>
        <View style={{ backgroundColor: '#EF5350', width: '100%', height: 5, marginTop: 5, marginBottom: 5, }} />
        <Paragraphs.executiveBranchInfo />
        </View>
    </ScrollView>
  );
}

const JudicialScreen = ({ navigation }) => {
  return (
    <ScrollView style={[styles.Container, {backgroundColor:'#FAFAFA'}]}>
      <View style={[styles.Container]}>
        <Text style={[styles.p1]}>
          California's Judicial Branch
        </Text>
        <View style={{ backgroundColor: '#795548', width: '100%', height: 5, marginTop: 5, marginBottom: 5, }} />
        <Paragraphs.judicialBranchInfo />
      </View>
    </ScrollView>
  );
}

// Purely display function, logic found in quiz.js
const TakeQuiz = ({ navigation }) => {
  return (
    <ScrollView style={[styles.Container, {backgroundColor:'#FAFAFA'}]}>
      <Quiz.DisplayQuestion />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  p1: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  p2: {
    fontSize: 16,
  },
  flagImage: {
    width: '100%',
    height: 150,
    aspectRatio: 2,
  },
  btn: {
    marginTop: 20,
    width: 350,
    height: 75,
    justifyContent: 'center',
  },
});


export default App;
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

export default function App() {
	return (
		<View style={styles.containerView1}>
			<Text>Ma Première application React Native</Text>
			<Text>Je m'appel : Clara Le Meur</Text>
			<Text>Et on ne demande pas leur age au dame!</Text>
			<Text>Je fait partie des RIL 2020</Text>
			<Image source={require('./assets/icon.png')} style={{ width: 100, height: 100 }} />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	containerScroolView: {
		flex: 1,
		backgroundColor: '#fff',
	},
	containerView1: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	containerView2: {
		display: 'flex',
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#E5E5E5',
	},
});

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FullPostScreen } from '../fullPost';
import { HomeScreen } from '../home';

const Stack = createNativeStackNavigator();

export const MyStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Home' component={HomeScreen} options={{ title: 'News' }} />
				<Stack.Screen name='FullPost' component={FullPostScreen} options={{ title: 'Post' }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

import { ActivityIndicator, View } from 'react-native';

export default Loading = () => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#121212',
			}}
		>
			<ActivityIndicator size={'large'} />
		</View>
	);
};

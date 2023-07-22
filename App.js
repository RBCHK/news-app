import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, Text, View } from 'react-native';
import { Wrapper } from './Styled';
import Post from './components/Post';

export default function App() {
	const [items, setItems] = useState();
	const [isLoading, setIsLoading] = useState(true);

	const fetchPosts = () => {
		setIsLoading(true);
		axios
			.get('https://64bc008b7b33a35a4446e91b.mockapi.io/news')
			.then(({ data }) => {
				setItems(data);
			})
			.catch(err => {
				console.log(err);
				Alert.alert('Alert', 'Error while getting news');
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	useEffect(fetchPosts, []);

	if (isLoading) {
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
	}

	return (
		<Wrapper>
			<Text
				style={{
					color: 'white',
					marginTop: 55,
					marginBottom: 5,
				}}
			>
				Go back
			</Text>
			<FlatList
				refreshControl={<RefreshControl tintColor={'white'} refreshing={isLoading} onRefresh={fetchPosts} />}
				data={items}
				renderItem={({ item }) => (
					<Post
						title={item.title}
						imageUrl={item.imageUrl}
						subTitle={item.subTitle}
						createdAt={item.createdAt}
						readingTime={item.readingTime}
					/>
				)}
			/>
		</Wrapper>
	);
}

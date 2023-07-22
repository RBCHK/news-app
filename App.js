import axios from 'axios';
import React from 'react';
import { Alert, FlatList, Text } from 'react-native';
import { Wrapper } from './Styled';
import Post from './components/Post';

export default function App() {
	const [items, setItems] = React.useState();

	React.useEffect(() => {
		axios
			.get('https://64bc008b7b33a35a4446e91b.mockapi.io/news')
			.then(({ data }) => {
				setItems(data);
			})
			.catch(err => {
				console.log(err);
				Alert.alert('Alert', 'Error while getting news');
			});
	}, []);

	return (
		<Wrapper>
			<Text style={{ color: 'white', marginTop: 55, marginBottom: 5 }}>Back</Text>
			<FlatList
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

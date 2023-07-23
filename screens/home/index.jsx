import axios from 'axios';
import { useEffect, useState } from 'react';
import { Alert, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import { Wrapper } from '../../Styled';
import Loading from '../../components/loading';
import Post from '../../components/post/Post';

export const HomeScreen = ({ navigation }) => {
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

	if (isLoading) return <Loading />;

	return (
		<Wrapper>
			{/* <Text
				style={{
					color: 'white',
					marginTop: 55,
					marginBottom: 5,
				}}
			>
				Go back
			</Text> */}
			<FlatList
				refreshControl={<RefreshControl tintColor={'white'} refreshing={isLoading} onRefresh={fetchPosts} />}
				data={items}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate('FullPost', { id: item.id, title: item.title })}
					>
						<Post
							title={item.title}
							imageUrl={item.imageUrl}
							subTitle={item.subTitle}
							createdAt={item.createdAt}
							readingTime={item.readingTime}
						/>
					</TouchableOpacity>
				)}
			/>
		</Wrapper>
	);
};

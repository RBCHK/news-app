import axios from 'axios';
import { useEffect, useState } from 'react';
import { Alert, Text } from 'react-native';
import { Wrapper } from './Styled';
import Post from './components/Post';

const data = {
	title: 'Well Hello, Sophia Smith',
	subTitle:
		'My old hoops coach, the late Hall of Famer Pete Carril, used to call them “light bulbs.” They were the players who’d walk onto the court in practice and make him light up, even if he were.. ',
	createdAt: '05/04/2023',
	readingTime: '1 min',
	imageUrl: 'https://api.time.com/wp-content/uploads/2023/07/GettyImages-1562395034.jpg?',
};

export default function App() {
	const [items, setItems] = useState();

	useEffect(() => {
		axios
			.get('https://64bc008b7b33a35a4446e91b.mockapi.io/news')
			.then(({ data }) => {
				setItems(data);
			})
			.catch(() => {
				Alert.alert('Alert', 'Error while getting news');
			});
	}, []);

	const { title, subTitle, createdAt, readingTime, imageUrl } = data;
	return (
		<Wrapper>
			<Text style={{ color: 'white', marginTop: 55, marginBottom: 5 }}>Back</Text>
			{items.map(({ title, imageUrl, subTitle, createdAt, readingTime }) => (
				<Post
					title={title}
					imageUrl={imageUrl}
					subTitle={subTitle}
					createdAt={createdAt}
					readingTime={readingTime}
				/>
			))}
		</Wrapper>
	);
}

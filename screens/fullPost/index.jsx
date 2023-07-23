import axios from 'axios';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Loading from '../../components/loading';
import { PostImage, Title, Wrapper } from './styled';

export const FullPostScreen = ({ route }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState();
	const { id, title } = route.params;

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(`https://64bc008b7b33a35a4446e91b.mockapi.io/news/${id}`)
			.then(({ data }) => {
				setData(data);
			})
			.catch(err => {
				console.log(err);
				Alert.alert('Alert', 'Error while getting post');
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	if (isLoading)
		return (
			<Wrapper>
				<Loading />
			</Wrapper>
		);

	return (
		<Wrapper>
			<PostImage source={{ uri: data.imageUrl }} />
			<Title>{title}</Title>
		</Wrapper>
	);
};

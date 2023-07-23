import { CreatedAt, PostDetails, PostImage, PostTextWrapper, PostView, Subtitle, Title } from './styled';

const Post = ({ title, subTitle, readingTime, createdAt, imageUrl }) => {
	return (
		<PostView>
			<PostImage
				source={{
					uri: imageUrl,
				}}
			/>
			<PostTextWrapper>
				<Title>{title}</Title>
				<Subtitle>{subTitle}</Subtitle>
				<PostDetails>
					{/* <ReadingTime>{readingTime} min</ReadingTime> */}
					<CreatedAt>{new Date(createdAt).toLocaleDateString()}</CreatedAt>
				</PostDetails>
			</PostTextWrapper>
		</PostView>
	);
};

export default Post;

import { CreatedAt, PostDetails, PostImage, PostTextWrapper, PostView, ReadingTime, Subtitle, Title } from './styled';

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
					<ReadingTime>{readingTime}</ReadingTime>
					<CreatedAt>{createdAt}</CreatedAt>
				</PostDetails>
			</PostTextWrapper>
		</PostView>
	);
};

export default Post;

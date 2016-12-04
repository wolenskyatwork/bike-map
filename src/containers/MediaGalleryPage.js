import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
	searchMediaAction,
	selectImageAction,
	selectVideoAction
} from '../actions/mediaActions';
import PhotoPage from '../components/PhotoPage';
import VideoPage from '../components/VideoPage';
import '../styles/style.css';

// MediaGalleryPage Component
class MediaGalleryPage extends Component {
	constructor() {
		super();

		this.handleSearch = this.handleSearch.bind(this);
		this.handleSelectImage = this.handleSelectImage.bind(this);
		this.handleSelectVideo = this.handleSelectVideo.bind(this);
	}
	
	componentDidMount() {
		this.props.dispatch(searchMediaAction('hedgehog'));
	}

	handleSelectImage(selectedImage) {
		this.props.dispatch(selectImageAction(selectedImage));
	}

	handleSelectVideo(selectedVideo) {
		this.props.dispatch(selectVideoAction(selectedVideo));
	}

	handleSearch(event) {
		event.preventDefault();
		if (this.query !== null) {
			this.props.dispatch(searchMediaAction(this.query.value));
			this.query.value = '';
		}
	}

	render() {
		const {
			images,
			selectedImage,
			videos,
			selectedVideo
		} = this.props;

		return (
			<div className="container-fluid">
				{images ? <div>
					<input
						type="text"
						ref={ref => (this.query = ref)}
					/>
					<input
						type="submit"
						className="btn btn-primary"
						value="Search Library"
						onClick={this.handleSearch}
					/>
					<div className="row">
						<PhotoPage
							images={images}
							selectedImage={selectedImage}
							onHandleSelectImage={this.handleSelectImage}
						/>
						<VideoPage
							videos={videos}
							selectedVideo={selectedVideo}
							onHandleSelectVideo={this.handleSelectVideo}
						/>
					</div>
				</div> : 'loading....'}
			</div>
		);
	}
}

const mapStateToProps = ({ images, videos }) => ({
	images: images[0],
	selectedImage: images.selectedImage,
	videos: videos[0],
	selectedVideo: videos.selectedVideo
});

export default connect(mapStateToProps)(MediaGalleryPage);


import React, { PropTypes } from 'react';

const PhotosPage = ({ 
	images,
	onHandleSelectImage,
	selectedImage = {
		id: 'undefined-selected',
		title: 'undefined-title',
		mediaUrl: 'undefined-url'
	}
}) => (
		<div className="col-md-6">
			<h2> Images </h2>
		<div>
		{console.log(selectedImage)}
			<div id={selectedImage}>
				<h6>{selectedImage.title}</h6>
				<img src={selectedImage.mediaUrl} alt={selectedImage.title} />
			</div>
		</div>
		<div className="image-thumbnail">
			{images.map((image, i) => (
				<div key={i} onClick={onHandleSelectImage.bind(this, image)}>
					<img src={image.mediaUrl} alt={image.title} />
				</div>
			))}
		</div>
	</div>
);

PhotosPage.propTypes = {
	images: PropTypes.array.isRequired,
	selectedImage: PropTypes.object,
	onHandleSelectImage: PropTypes.func.isRequired
};

export default PhotosPage;


import React from 'react';

const LrgImg = ({ selectedIndex,data }) => {

	return (
		<>
			<img src={data[selectedIndex].largeImg} alt="product-photo" />
		</>
	);
};

export default LrgImg;

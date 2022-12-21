import React from 'react';

const SmImg = ({ img }) => {
	console.log("SmImg komponentas renderinasi")
	return <img src={img} alt="product-photo"/>;
};

export default SmImg;

import React,{memo} from 'react';

const SmImg = ({ img }) => {
	console.log("SmImg komponentas renderinasi nors props nesikeicia")

	return <img src={img} alt="product-photo"/>;
};

export default memo(SmImg);

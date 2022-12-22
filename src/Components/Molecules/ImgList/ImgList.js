import React from 'react';
import SmImg from '../../Atoms/SmImg/SmImg';
import './ImgList.scss';

const ImgList = ({ data, setSelectedIndex,selectedIndex }) => {
	console.log("ImgList renderinasi nors props nesikeicia")
	return (
		<ul className="imgs-list">
			{data.map((img, index) => {
				return (
					<li className={selectedIndex==index ? "imgs-list__item":"imgs-list__item-hover"}	key={index}	
					onClick={() =>setSelectedIndex(index)}>
						<SmImg img={img.smallImg} />
						<div 
						className={selectedIndex==index ? "imgs-list__selected":""}>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default ImgList;

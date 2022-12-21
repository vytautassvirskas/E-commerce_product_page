import React,{memo} from 'react';
import SmImg from '../../Atoms/SmImg/SmImg';
import './ImgList.scss';

const ImgList = ({ data, setSelectedIndex }) => {
	console.log("renderinasi nors props nesikeicia")
	return (
		<ul className="imgs-list">
			{data.map((img, index) => {
				return (
					<li className="imgs-list__item"	key={index}	onClick={() =>setSelectedIndex(index)}>
						<SmImg img={img.smallImg} />
					</li>
				);
			})}
		</ul>
	);
};

export default memo(ImgList);

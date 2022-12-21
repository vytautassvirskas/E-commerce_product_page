import React, { useState,useEffect } from 'react';
import LrgImg from '../../Atoms/LrgImg/LrgImg';
import ImgList from '../../Molecules/ImgList/ImgList';
import './ImgSection.scss';
import {imgArr as data} from "../../../Utils/data.js"

const ImgSection = () => {
	const [ selectedIndex, setSelectedIndex ] = useState(0);

	useEffect(()=>{
		console.log('selectedIndex imgSection useEffecte: ', selectedIndex);
	},[selectedIndex])

	console.log('selectedIndex imgSection: ', selectedIndex);	//istrinti

	return (
		<section className='imgs'>
			{console.log("renderinasi JSX img section")}
			<div className='imgs__lrg-img'>
				<LrgImg selectedIndex={selectedIndex} data={data}  />
			</div>
			<ImgList data={data} setSelectedIndex={setSelectedIndex} />
		</section>
	);
};

export default ImgSection;

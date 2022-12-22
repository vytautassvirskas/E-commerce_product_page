import React, { useState,useEffect, useContext } from 'react';
import MainContext from '../../../Utils/MainContext';
import LrgImg from '../../Atoms/LrgImg/LrgImg';
import ImgList from '../../Molecules/ImgList/ImgList';
import './ImgSection.scss';


const ImgSection = () => {
	
	const {lightbox,setLightbox,data,selectedIndex,setSelectedIndex} = useContext(MainContext)
	
	console.log("ImgSection component setLightbox bollean:", lightbox)

	// useEffect(()=>{
	// 	console.log('selectedIndex imgSection useEffecte: ', selectedIndex);
	// },[selectedIndex])

	// 	//istrinti
	// console.log('selectedIndex imgSection: ', selectedIndex);

	

	return (
		<section className='imgs'>
			{console.log("renderinasi JSX img section")}
			<div className='imgs__lrg-img' 
			onClick={()=>setLightbox(true)}
			>
				<LrgImg selectedIndex={selectedIndex} data={data}  />
			</div>
			<ImgList data={data} setSelectedIndex={setSelectedIndex} selectedIndex={selectedIndex} />
		</section>
	);
};

export default ImgSection;

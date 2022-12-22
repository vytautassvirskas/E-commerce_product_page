import React,{useState} from 'react';
import MainContext from '../../Utils/MainContext';
import {imgArr as data} from "../../Utils/data.js"
import ImgSection from '../Organisms/ImgSection/ImgSection';
import Header from '../Organisms/Header/Header';
import ItemSection from '../Organisms/ItemSection/ItemSection';
import LightBox from '../Organisms/LightBox/LightBox';
import "./Home.scss"



const Home = () => {
	const [lightbox, setLightbox]=useState(false)
	const [ selectedIndex, setSelectedIndex ] = useState(0);

	const contextValue={
		lightbox,setLightbox,
		selectedIndex, setSelectedIndex,
		data
	}
	
	return (
		<>
			<MainContext.Provider value={contextValue}>
				<Header />
				<main className='main'>
					<ImgSection/>
					<ItemSection/>
					{(lightbox)?
					<LightBox/>
					:
					null
					}
				</main>
			</MainContext.Provider>
		</>

	);
};

export default Home;

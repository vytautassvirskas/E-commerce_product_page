import React from 'react';
import ImgSection from '../Organisms/ImgSection/ImgSection';
import Header from '../Organisms/Header/Header';
import "./Home.scss"
import ItemSection from '../Organisms/ItemSection/ItemSection';
const Home = () => {
	return (
		<>
			<Header />
			<main className='main'>
				<ImgSection/>
				<ItemSection/>

			</main>
		</>

	);
};

export default Home;

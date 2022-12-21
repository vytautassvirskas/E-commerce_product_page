import React from 'react';
import ImgSection from '../Organisms/ImgSection/ImgSection';
import Header from '../Organisms/Header/Header';
import "./Home.scss"
const Home = () => {
	return (
		<>
			<Header />
			<main className='main'>
				<ImgSection/>

			</main>
		</>

	);
};

export default Home;

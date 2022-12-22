import React,{useState, useContext} from 'react';
import MainContext from '../../../Utils/MainContext';
import LrgImg from "../../Atoms/LrgImg/LrgImg"
import ImgList from '../../Molecules/ImgList/ImgList';
import Close from "../../Atoms/Close/Close"
import Next from "../../Atoms/Next/Next"
import Previous from "../../Atoms/Previous/Previous"


import "./LightBox.scss"

const LightBox = () => {
    const {lightbox,setLightbox,data,selectedIndex,setSelectedIndex}=useContext(MainContext);
  console.log("data.length: ",data.length)

    const handleNext = () =>{
      setSelectedIndex((prevValue)=>{
        if(prevValue===data.length-1) return prevValue;

        return prevValue + 1;
      })
    }

    const handlePrevious = () => {
      setSelectedIndex((prevValue)=>{
        if(prevValue == 0) return prevValue;

        return prevValue - 1;
      })
    }

  return (
    <section className='lightbox'>
      <div className="lightbox__wrapper">
        <div className='lightbox__lrg-img'>
          <div className='lightbox__close-btn' onClick={()=>setLightbox(false)}>
            <Close/>
          </div>
				  <LrgImg selectedIndex={selectedIndex} data={data}  />
          <div className="lightbox__next" onClick={handleNext}>
            <Next/>
          </div>
          <div className="lightbox__previous" onClick={handlePrevious}>
            <Previous/>
          </div>
			  </div>
        <div className="lightbox__list-wrapper">
			    <ImgList data={data} setSelectedIndex={setSelectedIndex} selectedIndex={selectedIndex} />
        </div>
      </div>
    </section>
  )
}

export default LightBox
import React from 'react';
//@ts-ignore
import img2 from '../../assets/1_CsJ05WEGfunYMLGfsT2sXA.gif'

 const Preloader = () => {
    const style={
        height:'15px',
        width:'70px',
    }
    return <span style={{margin:'0',padding:'0',backgroundColor:'white'}}>
    <img src={img2} alt="preloader" style={style}/>
  </span>
}
export default Preloader;
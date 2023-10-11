import React from 'react'

import Category from './Category/category';
import Price from './Price/price';
import Colors from './Colors/colors';

export default function Sidebar({handleChange}) {
  return (
    <>
    <section className='sidebar'>
        <div className='logo'>
         <h1>&#128722;</h1> 
         <h4><span style={{color:'#03a9f4'}} >Emmas Shop</span></h4>
        </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange}/>
        
    </section>
    </>
  )
}

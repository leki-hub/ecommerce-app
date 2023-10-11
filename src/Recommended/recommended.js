import React from 'react'
import Button from '../Components/button'
export default function Recommended({ handleClick}) {
  return (
    <>
    <div>
      <h2 className='merchandise-title'>Merchandise</h2>
      <div className='merchandise-container' >
      <Button className='btns'onClickHandler={handleClick} value="" title={"All Products"} />
        <Button className='btns'onClickHandler={handleClick} value="Suits" title={"Suits"} />
        <Button className='btns'onClickHandler={handleClick} value="Bags" title={"Bags"} />
        <Button className='btns'onClickHandler={handleClick} value="Shoes" title={"Shoes"} />
        <Button className='btns'onClickHandler={handleClick} value="Caps" title={"Caps"} />
      </div>
    </div>
    </>
  )
}

import React from 'react'
import MainSlider from 'components/MainSlider'

const PhotoEditor = ({ posts }) =>
  <div className='ui fluid editor card'>
    <div className='content'>
      <div className='header'>Photo title</div>
    </div>
    {/* <div className='image'>
      <img src='https://picsum.photos/1000' />
    </div> */}
    <input type='file' />
    <div className='content'>
      <div className='ui secondary pointing menu'>
        <a className='active item'>
          Brightness
        </a>
        <a className='item'>
          Contrast
        </a>
        <a className='item'>
          Grayscale
        </a>
        <a className='item'>
          Hue
        </a>
        <a className='item'>
          Saturation
        </a>
        <a className='item'>
          Sepia
        </a>
        <a className='item'>
          Vignette
        </a>
      </div>
      <MainSlider />
    </div>
  </div>

export default PhotoEditor

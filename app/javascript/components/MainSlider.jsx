import React from 'react'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets'

const MainSlider = ({ className	 }) =>
  <div>
    <Slider className={className} />
    <Range />
  </div>

export default MainSlider

// @flow
import React from 'react';
import './index.styles.scss';
import ZoomedSlide from './slide';
import { SliderPropsT } from './types';

class ZoomingSlider extends React.Component<SliderPropsT> {
  constructor(props) {
    super(props);
    this._scrollable = React.createRef();
  }

  componentDidMount() {
    this._scrollable.current.scrollLeft = 1200;
  }

  handleScroll = e => {
    console.log(e);
  };

  render() {
    return (
      <div
        className="zooming-slider-container"
        ref={this._scrollable}
        onScroll={this.handleScroll}
      >
        <div className="zooming-slider">
          {this.props.slides.reverse().map((item, index) => (
            <ZoomedSlide key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default ZoomingSlider;

// @flow
import React from 'react';
import './index.styles.scss';

type SlidePropsT = {
  title: string,
  color: string
};

type SlideT = {
  item: SlidePropsT,
  index: number
};

type SliderPropsT = {
  slides: Array<SlidePropsT>
};

class ZoomedSlide extends React.Component<SlideT> {
  constructor(props) {
    super(props);
    this._slide = React.createRef();
  }

  render() {
    return (
      <div
        ref={this._slide}
        className={`zoomed-slide slide-${this.props.index + 1}`}
        style={{ backgroundColor: this.props.item.color }}
      />
    );
  }
}

const ZoomingSlider = ({ slides }: SliderPropsT) => {
  return (
    <div className="zooming-slider-container">
      <div className="zooming-slider">
        {slides.reverse().map((item, index) => (
          <ZoomedSlide key={item.title} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ZoomingSlider;

import React from 'react';
import { SlideT } from '../types';

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

export default ZoomedSlide;

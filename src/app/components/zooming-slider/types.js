// @flow

type ItemPropsT = {
  title: string,
  color: string
};

type SlideT = {
  item: ItemPropsT,
  index: number
};

type SliderPropsT = {
  slides: Array<ItemPropsT>
};

export type { ItemPropsT, SlideT, SliderPropsT };

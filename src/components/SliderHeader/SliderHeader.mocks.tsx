import { ISliderHeader } from '.';

const baseStyles: ISliderHeader = {
  currentIndex: 0,
  totalSlides: 3,
  slideSeparator: 'of',
  onPrevSlide: () => {
    console.log('Previous slide.');
  },
  onNextSlide: () => {
    console.log('Next slide.');
  },
  disablePrev: false,
  disableNext: false,
};

export const mockSliderHeaderProps = {
  baseStyles,
};

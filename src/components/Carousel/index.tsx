import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import PaginationDots from "../PaginationDots";
import SliderHeader from "../SliderHeader";

/**
 * Props for the Slider component
 * @param {string} [className] - Additional class names to apply to the Slider container.
 * @param {CSSProperties} [style] - Inline styles to apply to the Slider container.
 * @param {React.ReactNode[]} [children] - Children to render inside the cards of the slider.
 * @param {string} [bgImgSrc] - Background image url, without it the slide won't have a background image.
 * @param {string} [slideSeparator] - Separator text between the current slide number and total slides (e.g., x of y, x sur y).
 * @param {number} [slidesToShow] - Number of slides to show at a time.
 * @param {boolean} [togglePaginationDots] - Whether to display the pagination dots.
 * @param {boolean} [toggleNavigation] - Whether to display the navigation.
 */
export interface ISlider {
  children: React.ReactNode[];
  bgImgSrc?: string;
  slideSeparator: "sur" | "of";
  slidesToShow?: number;
  togglePaginationDots?: boolean;
  toggleNavigation?: boolean;
  dragOffsetValue?: number;
}
const Background = styled.div<{ $bgImgSrc: string }>`
  background: ${({ $bgImgSrc }) =>
    $bgImgSrc ? `url(${$bgImgSrc})` : "transparent"};
  background-size: cover;
  background-position: center;
  height: fit-content;
  width: 100%;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 32px 24px 0 24px;
`;

const SliderPagination = styled.div<{
  $togglePaginationDots: boolean;
  $totalSlides: number;
  $visibleSlides: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0 16px 0;
  box-sizing: border-box;
  height: ${({ $togglePaginationDots, $totalSlides, $visibleSlides }) =>
    $togglePaginationDots && $totalSlides !== $visibleSlides ? "40px" : "32px"};
`;

const SliderBody = styled.div`
  overflow: hidden;
`;

const SliderWrapper = styled.div<{
  $isDragging: boolean;
  $currentIndex: number;
  $dragOffset: number;
  $slidesToShow: number;
}>`
  display: flex;
  transition: ${({ $isDragging }) =>
    $isDragging ? "none" : "transform 0.3s ease"};
  transform: ${({ $currentIndex, $dragOffset, $slidesToShow }) => {
    const slideWidth = `(100% - (${
      $slidesToShow - 1
    } * 16px)) / ${$slidesToShow}`;
    return `translateX(calc(-${$currentIndex} * ((${slideWidth}) + 16px) + ${$dragOffset}px))`;
  }};
  will-change: transform;
  gap: 16px;
`;

const Slide = styled.div<{ $slidesToShow: number }>`
  width: ${({ $slidesToShow }) =>
    `calc((100% - (${$slidesToShow - 1} * 16px)) / ${$slidesToShow})`};
  flex-shrink: 0;
  border-radius: 16px;
  background: white;
  max-height: 314px;
  overflow: hidden;
`;

const paginationDotsStyle = {
  background: "transparent",
  padding: 0,
};

const Slider: React.FC<ISlider> = ({
  children,
  bgImgSrc = "https://i.imgur.com/fvcwruC.jpeg",
  slideSeparator = "of",
  slidesToShow,
  togglePaginationDots = true,
  toggleNavigation = true,
  dragOffsetValue = 50,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [visibleSlides, setVisibleSlides] = useState(
    Math.max(slidesToShow ?? 1, 1)
  );
  const startTouchRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const totalSlides = React.Children.count(children);

  // Handle responsiveness
  useLayoutEffect(() => {
    const updateSlidesToShow = () => {
      if (slidesToShow) {
        setVisibleSlides(slidesToShow);
      } else if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;

        // Get the min-width of the card content
        const child = slideRef.current
          ? (slideRef.current.firstChild as HTMLElement)
          : 0;
        const computedStyle = child ? window.getComputedStyle(child) : null;
        const minWidth = computedStyle ? parseFloat(computedStyle.minWidth) : 0;

        const slidesCount = Math.floor(containerWidth / (minWidth + 16)); // 16 is the gap between the cards

        // Ensure visibleSlides never exceeds the total number of slides available
        setVisibleSlides(Math.min(Math.max(slidesCount, 1), totalSlides));
      }
    };

    updateSlidesToShow();

    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, [totalSlides, slidesToShow]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalSlides - visibleSlides ? prevIndex + 1 : prevIndex
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    startTouchRef.current = event.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (startTouchRef.current !== null) {
      const currentTouch = event.touches[0].clientX;
      setDragOffset(currentTouch - startTouchRef.current);
    }
  };

  const handleTouchEnd = () => {
    if (dragOffset > dragOffsetValue) {
      prevSlide();
    } else if (dragOffset < -dragOffsetValue) {
      nextSlide();
    }
    setDragOffset(0);
    setIsDragging(false);
    startTouchRef.current = null;
  };

  const slides = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return (
        <Slide key={child.key} $slidesToShow={visibleSlides} ref={slideRef}>
          {child}
        </Slide>
      );
    }
  });

  return (
    <Background $bgImgSrc={bgImgSrc ?? ""} ref={containerRef}>
      {toggleNavigation && totalSlides !== visibleSlides && (
        <SliderHeader
          currentIndex={currentIndex}
          totalSlides={totalSlides}
          slideSeparator={slideSeparator}
          onPrevSlide={prevSlide}
          onNextSlide={nextSlide}
          disablePrev={currentIndex === 0}
          disableNext={currentIndex === totalSlides - visibleSlides}
        />
      )}
      <SliderBody>
        <SliderWrapper
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          $isDragging={isDragging}
          $currentIndex={currentIndex}
          $dragOffset={dragOffset}
          $slidesToShow={visibleSlides}
        >
          {slides}
        </SliderWrapper>
      </SliderBody>

      <SliderPagination
        $togglePaginationDots={togglePaginationDots}
        $totalSlides={totalSlides}
        $visibleSlides={visibleSlides}
      >
        {togglePaginationDots && totalSlides !== visibleSlides && (
          <PaginationDots
            length={totalSlides}
            currentIndex={currentIndex}
            style={paginationDotsStyle}
          />
        )}
      </SliderPagination>
    </Background>
  );
};

export default Slider;

import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
} from "reactstrap";

const items = [
  {
    src: require("../assets/img/women.jpg"),
    altText: "SLIDE 1",
    caption:
      "wasrdtxyfcgihklhjmnbgfvcwsderyutiyjgnb fvdsasdfvgkihb,mnfbg wasrdtxyfcgihklhjmnbgfvcwsderyutiyjgnb fvdsasdfvgkihb,mnfbgwasrdtxyfcgihklhjmnbgfvcwsderyutiyjgnb fvdsasdfvgkihb,mnfbgwasrdtxyfcgihklhjmnbgfvcwsderyutiyjgnb fvdsasdfvgkihb,mnfbgwasrdtxyfcgihklhjmnbgfvcwsderyutiyjgnb fvdsasdfvgkihb,mnfbgwasrdtxyfcgihklhjmnbgfvcwsderyutiyjgnb fvdsasdfvgkihb,mnfbgwasrdtxyfcgihklhjmnbgfvcwsderyutiyjgnb fvdsasdfvgkihb,mnfbg",
    key: 1,
  },
  {
    src: require("../assets/img/victoria-falls.jpg"),
    altText: "Slide 2",
    // caption: "Slide 2",
    caption: " wasrdtxyfcgihklhjmnbgfvcwsderyutiyjgnb fvdsasdfvgkihb,mnfbg",
    key: 2,
    tag: (
      <div>
        <Button>Hello world2</Button>
      </div>
    ),
  },
  {
    src: require("../assets/img/masaai.jpg"),
    altText: "Slide 3",
    // caption: "Slide 3",
    caption: "wasrdtxyfcgihklhjmnbgfvcwsderyutiyjgnb fvdsasdfvgkihb,mnfbg",
    key: 3,
  },
  {
    src: require("../assets/img/himba.jpg"),
    altText: "Slide 3",
    // caption: "Slide 3",
    caption: "wasrdtxyfcgihklhjmnbgfvcwsderyutiyjgnb fvdsasdfvgkihb,mnfbg",
    key: 3,
  },
  {
    src: require("../assets/img/victoria-falls.jpg"),
    altText: "Slide 3",
    // caption: "Slide 3",
    caption: "wasrdtxyfcgihklhjmnbgfvcwsderyutiyjgnb fvdsasdfvgkihb,mnfbg",
    key: 3,
  },
  {
    src: require("../assets/img/red.jpg"),
    altText: "Slide 3",
    // caption: "Slide 3",
    caption: "wasrdtxyfcgihklhjmnbgfvcwsderyutiyjgnb fvdsasdfvgkihb,mnfbg",
    key: 3,
  },
  {
    src: require("../assets/img/elephant.jpg"),
    altText: "Slide 3",
    // caption: "Slide 3",
    caption: "wasrdtxyfcgihklhjmnbgfvcwsderyutiyjgnb fvdsasdfvgkihb,mnfbg",
    key: 3,
  },
  {
    src: require("../assets/img/zee.jpg"),
    altText: "Slide 3",
    // caption: "Slide 3",
    caption: "wasrdtxyfcgihklhjmnbgfvcwsderyutiyjgnb fvdsasdfvgkihb,mnfbg",
    key: 3,
  },
];

function Mission(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        id="hero"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          className="custom-tag img-fluid"
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.altText}
          className="mb-5 pb-5"
          //   style={{ marginTop: -39 }}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
      fade
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Mission;

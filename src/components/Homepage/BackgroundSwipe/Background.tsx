import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";
import { bindKeyboard } from "react-swipeable-views-utils";
import { Fragment } from "react";
import MainMenu from "../MainMenu/MainMenu";
import Pagination from "../VerticalPagination/Pagination";
import boy from "../../../assets/kids/boy.jpg";
import girl from "../../../assets/kids/girl.jpg";
import shoesandbags from "../../../assets/kids/shoesandbags.jpg";
import Header from "../../Header/Header";
import men from "../../../assets/men.jpg";
import menSuits from "../../../assets/men-suits.jpg";
import mini from "../../../assets/kids/mini.jpg";

const AutoPlayKeyboard = bindKeyboard(autoPlay(SwipeableViews));

const styles = {
  slideContainer: {
    height: "100vh",
  },
  slide: {
    backgroundPosition: "50% 50%",
    backgroundSize: "cover",
    minHeight: "100vh",
  },
  slide1: {
    backgroundImage: `url(${boy})`,
  },
  slide2: {
    backgroundImage: `url(${girl})`,
  },
  scroll: {
    height: "100vh",
    overflow: "scroll",
  },
  slide3: {
    backgroundImage: `url(${shoesandbags})`,
  },
  slide11: {
    backgroundImage: `url(${men})`,
  },
  slide12: {
    backgroundImage: `url(${menSuits})`,
  },
  slide13: {
    backgroundImage: `url(${mini})`,
  },
};

function Background() {
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (index: number) => {
    setIndex(index);
  };

  const switchSlide = (index: number) => {
    if (index == 4) {
      setIndex(0);
    }
  };

  return (
    <Fragment>
      <AutoPlayKeyboard
        containerStyle={styles.slideContainer}
        enableMouseEvents
        axis="y"
        index={index}
        onChangeIndex={handleChangeIndex}
        direction="incremental"
        slideCount={3}
        interval={10000}
      >
        <SwipeableViews
          containerStyle={styles.slideContainer}
          enableMouseEvents
          axis="x"
        >
          <div style={Object.assign({}, styles.slide, styles.slide11)}></div>
          <div style={Object.assign({}, styles.slide, styles.slide12)}></div>
          <div style={Object.assign({}, styles.slide, styles.slide13)}></div>
        </SwipeableViews>
        <div style={Object.assign({}, styles.slide, styles.slide2)}></div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}></div>
      </AutoPlayKeyboard>

      <Pagination dots={3} index={index} onChangeIndex={handleChangeIndex} />

      <MainMenu></MainMenu>
      <Header></Header>
    </Fragment>
  );
}

export default Background;

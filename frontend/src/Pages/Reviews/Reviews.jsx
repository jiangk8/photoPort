import React, { useState, useEffect } from "react";
import {OuterCon, InnerCon, ReviewDivider, ReviewImage, ReviewContent, ReviewBody, ReviewBodyBold, HR} from "./styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";




var images = [];

function Reviews() {
  function importAll(r) {

    let i = [];
    r.keys().map((item) =>
      i.push(
        require("../../Images/ReviewImages/" + item.replace("./", "")).default
      )
    );
    return i;
  }

  images = importAll(
    require.context("../../Images/ReviewImages", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <OuterCon>
      <InnerCon>
        <ReviewDivider>
            <ReviewImage src={images[0]} />
          <ReviewContent>
            <ReviewBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna <b>aliqua</b>.
            </ReviewBody>
          </ReviewContent>
        </ReviewDivider>
        <HR />
        <ReviewDivider>
          <ReviewContent>
            <ReviewBody>
              Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing elit,{" "}
              <b>sed do eiusmod tempor</b> incididunt ut labore et dolore magna
              aliqua.
            </ReviewBody>
          </ReviewContent>
            <ReviewImage src={images[1]} />
        </ReviewDivider>
        <HR />
        <ReviewDivider>
            <ReviewImage src={images[2]} />
          <ReviewContent>
            <ReviewBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut <b>labore et dolore magna aliqua</b>.
            </ReviewBody>
          </ReviewContent>
        </ReviewDivider>
      </InnerCon>
    </OuterCon>
  );
}

export default Reviews;

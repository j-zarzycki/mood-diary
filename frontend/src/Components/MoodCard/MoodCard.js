import CardWrapper from "./CardWrapper";
import CardContext from "./CardContext";
import CardOptions from "./CardOptions";
import MoodFace from "./MoodFace";
import { useEffect, useState } from "react";
import axios from "axios";

const MoodCard = (props) => {
  return (
    <CardWrapper>
      <MoodFace />
      <CardContext title={props.title} mood={props.mood} postDate={props.postDate}/>
      <CardOptions postId={props.postId} />
    </CardWrapper>
  );
};

export default MoodCard;

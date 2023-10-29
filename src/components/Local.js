import React from "react";
import { useState } from "react";

const description = {
  webkitLineClamp: "3",
  webkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

export default function Local(props) {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="local_Card">
      
      <div>
        <div className="local_card_section_one">
          <img
            src={require(`../images/${props.item.coverImg}`)}
            className="local_card_img"
            alt="Country view"
          />
          <span className="country">{props.item.location}</span>
        </div>
        <div className="local_card_section_two">
          <h4 className="title">{props.item.title}</h4>
          <p
            style={isOpen ? null : description}
            className="description"
          >
            {props.item.description}
          </p>
          <button onClick={() => setIsOpen(!isOpen)} className="read_more_btn">
            {isOpen ? "Read less" : "Read more..."}
          </button>

          <p>
            <span className="date">{props.item.stats.date}</span>
            <span className="on"> on </span>
            <b className="type">{props.item.stats.type}</b>
          </p>
        </div>
      </div>
    </div>
  );
}

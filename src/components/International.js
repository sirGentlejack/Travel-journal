import React from "react";
import { useState } from "react";

const description = {
  webkitLineClamp: "4",
  webkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

export default function International(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="international_card">
      <div>
        <img
          src={require(`../images/${props.item.coverImg}`)}
          className="international_card_img"
          alt="Country view"
        />
        <span className="country">{props.item.location}</span>
      </div>
      <div>
        <h3 className="title">{props.item.title}</h3>

        <p style={isOpen ? null : description} className="description">
          {props.item.description}
        </p>
        <button onClick={() => setIsOpen(!isOpen)} className="read_more_btn">
          {isOpen ? "Read less" : "Read more..."}
        </button>
        <p>
          <span className="date">{props.item.stats.date}</span>
          <span> on </span>
          <b className="type">{props.item.stats.type}</b>
        </p>
      </div>
    </div>
  );
}

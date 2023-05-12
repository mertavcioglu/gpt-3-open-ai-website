import React from "react";
import "./BlogCard.css";

function BlogCard(props) {
  return (
    <div className="blog-card-container">
      <img src={props.image} alt="blog-img01" className="blog-image-01" />
      <div className="blog-card__field">
        <p className="blog-card__date">{props.date}</p>
        <h1 className="blog-card__header">{props.header}</h1>
        <p className="blog-card__text"> {props.text}</p>
      </div>
    </div>
  );
}

export default BlogCard;

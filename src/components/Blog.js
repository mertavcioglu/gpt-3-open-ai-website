import React from "react";
import "./Blog.css";
import blogImage01 from "../images/blog01.png";
import blogImage02 from "../images/blog02.png";
import blogImage03 from "../images/blog03.png";
import blogImage04 from "../images/blog04.png";
import blogImage05 from "../images/blog05.png";

import BlogCard from "./BlogCard";

function Blog() {
  return (
    <div className="blog-container">
      <h1 className="blog__header">
        A lot is happening, <br /> We are blogging about it.
      </h1>
      <div className="blog__blog-group">
        <div className="blog__blog-group01">
          <img src={blogImage01} alt="blog-img01" className="blog-image-01" />
          <div className="blog__blog-group01-field">
            <p className="blog__blog-group01-date">Sep 26, 2021</p>
            <h1 className="blog__blog-group01-header">
              GPT-3 and Open AI is the future. Let us exlore how it is?
            </h1>
            <p className="blog__blog-group01-text">Read Full Article</p>
          </div>
        </div>
        <div className="blog__blog-group02">
          <BlogCard
            image={blogImage02}
            date="Sep 26, 2021"
            header="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            text="Read Full Article"
          />
          <BlogCard
            image={blogImage03}
            date="Sep 26, 2021"
            header="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            text="Read Full Article"
          />
          <BlogCard
            image={blogImage04}
            date="Sep 26, 2021"
            header="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            text="Read Full Article"
          />
          <BlogCard
            image={blogImage05}
            date="Sep 26, 2021"
            header="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            text="Read Full Article"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;

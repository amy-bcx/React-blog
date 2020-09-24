import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../Data/blog2.json';
import CommentBox from '../CommentBox';
import reactDOM from 'react-dom';

/**
* @author
* @function BlogPost
**/


const BlogPost = (props) => {

  const [post, setPost] = useState({
      id: "" ,
      blogCategory: "" ,
      blogTitle : "" ,
      postedOn: "" ,
      author: "" ,
      blogImage: "" ,
      blogText: ""
  });
  const [slug, setSlug] = useState('');
  
  
  useEffect(() => {
      const slug = props.match.params.slug;
      const post = blogPost.data2.find(post => post.slug == slug);
      setPost(post);
      setSlug(slug)
  }, [post, props.match.params.slug]);

  if(post.blogImage == "") return null;

return(
      <div key={post.id} className="blogPostContainer">
          <Card>
              <div className="blogHeader">
                <span className="blogCategory">{post.blogCategory}</span>
                  <h1 className="postTitle">{post.blogTitle}</h1>
                <span className="postedBy">posted on {post.postedOn} by {post.author}</span>
              </div>

              <div className="postImageContainer">
                  <img src={require('../../blogPostimages/' + post.blogImage)} alt="Post Image" />
                  
              </div>

              <div className="postContent">
                <h3>{post.blogTitle}</h3>
                <p>{post.blogText}</p>
                
                <CommentBox/>
                  <p></p>
                
              </div>
              
          </Card>
      </div>
 )


}

export default BlogPost 
import React, {useState, useEffect} from 'react';
import Card from '../../components/UI/Card';
import { NavLink } from 'react-router-dom';
import blogPost from '../../Data/blog2.json';
import './style.css';
import Sidebar from '../../components/Sidebar';
import Layout from '../../components/Layout';

/**
* @author
* @function Posts
**/
const SideImage = props => {
  return (
      <div style={{ height: `${props.height}px`  }}>
          <img src={props.src} alt="" />
      </div>
  );
}

const Posts = (props) => {


  const [posts, setPosts] = useState([]);
    
  
  useEffect(() => {
      const posts = blogPost.data2;
      setPosts(posts);
  }, [posts]);


   return(
    <div className="postsContainer" style={{
      width: props.width
  }}>
     
    <Card><div className="postsTitleContainer">All the Posts</div></Card>
     
       
    <Layout><Card className="allPosts">
      {
                        posts.map(post => {

                            return (
                               
                                    <div key={post.id} className="blogHeaders"><Card  style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                                        <h3 className="postsTitle">{post.blogTitle}</h3>
                                        <span className="postedBy">{post.postedOn}</span>
                                        <div className="postsImageContainer">
                                        <NavLink key={post.id} to={`/post/${post.slug}`} value={post.id}>
                                        <img  height={props.sideImageHeight} src={require('../../blogPostimages/' + post.blogImage)} alt="Post Image" />
                                        </NavLink>
                                        </div></Card>
                                        
                                    </div>
                                    
                                
                                
                            );
                        })
                    }
      </Card></Layout>    
    </div>
    


   )

 }

export default Posts
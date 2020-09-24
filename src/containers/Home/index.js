import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Sidebar from '../../components/Sidebar';
import RecentPosts from './RecentPosts';

import blogData from '../../Data/blog.json'
import Layout from '../../components/Layout'
import Data from './Blog3.json';


const SideImage = props => {
    return (
        <div style={{ height: `${props.height}px`  }}>
            <img src={props.src} alt="" />
        </div>
    );
}

const ImageGallery = props => (
        <div className="galleryPost" style={props.galleryStyle}>
                <section style={{ width: props.largeWidth }}>
                    <div className="mainImageWrapper">
                        <img src={require('../../blogPostimages/' + props.imagesArray[0])} alt="" />
                    </div>
                </section>
                <section className={"sideImageWrapper"} style={{ width: props.smallWidth }}>
                    {
                        props.imagesArray.map(image => 
                            <SideImage key={SideImage.id}
                                height={props.sideImageHeight}
                                src={require('../../blogPostimages/' + image)}
                                alt=""/>
                        )
                    }
                </section>
        </div>
);

const Home  = props => {
    const galleryHeight = 450;
    const galleryStyle = {
        height: galleryHeight+'px',
        overflow: 'hidden'
    }
    const sideImageHeight = galleryHeight / 3;
   const imgAr = Data.data.map(post => post.blogImage)
    return (
        <div>
            <Card>
                <ImageGallery 
                            largeWidth="70%"
                            smallWidth="30%"
                            sideImageHeight={sideImageHeight}
                            galleryStyle={galleryStyle}
                            imagesArray={imgAr}
                            key={ImageGallery.id}
                        />                       
            </Card>
                <Layout>
                    <RecentPosts style={{width: '70%'}}/>
                </Layout>
        </div>
    );
}


export default Home;
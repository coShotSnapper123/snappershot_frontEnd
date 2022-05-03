import React,{useState} from 'react'
import BlogsBlock from '../components/BlogsBlock/BlogsBlock';
import {Link} from "react-router-dom"
import "./Blogs.css"
import BlogSlider from '../components/BlogSlider/BlogSlider';

export default function Blogs() {
    const [blogList,setBlogList] = useState([
        {
            blogImage:"./assets/blogs/blog1.png",
            blogDate:"28th January 2022",
            blogHead:"France Is Alive to enhance patient communication",
            blogCont:"Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text.",
            blogId:"1"
        },{
            blogImage:"./assets/blogs/blog2.png",
            blogDate:"28th January 2022",
            blogHead:"France Is Alive to enhance patient communication",
            blogCont:"Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text.",
            blogId:"2"
        },{
            blogImage:"./assets/blogs/blog3.png",
            blogDate:"28th January 2022",
            blogHead:"France Is Alive to enhance patient communication",
            blogCont:"Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text.",
            blogId:"3"
        },{
            blogImage:"./assets/blogs/blog1.png",
            blogDate:"28th January 2022",
            blogHead:"France Is Alive to enhance patient communication",
            blogCont:"Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text.",
            blogId:"4"
        },{
            blogImage:"./assets/blogs/blog2.png",
            blogDate:"28th January 2022",
            blogHead:"France Is Alive to enhance patient communication",
            blogCont:"Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text.",
            blogId:"5"
        },{
            blogImage:"./assets/blogs/blog3.png",
            blogDate:"28th January 2022",
            blogHead:"France Is Alive to enhance patient communication",
            blogCont:"Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text.",
            blogId:"6"
        },{
            blogImage:"./assets/blogs/blog1.png",
            blogDate:"28th January 2022",
            blogHead:"France Is Alive to enhance patient communication",
            blogCont:"Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text.",
            blogId:"7"
        },{
            blogImage:"./assets/blogs/blog2.png",
            blogDate:"28th January 2022",
            blogHead:"France Is Alive to enhance patient communication",
            blogCont:"Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text.",
            blogId:"8"
        },{
            blogImage:"./assets/blogs/blog3.png",
            blogDate:"28th January 2022",
            blogHead:"France Is Alive to enhance patient communication",
            blogCont:"Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text.",
            blogId:"9"
        }
    ]);
  return (
    <>
        <div className='blog_slider_sec pt_menu'>
            <BlogSlider 
            
            />
        </div>
        <div className='blog_list_sec'>
            <div className='blog_head'>
                <div className='display_h4'>Blogs</div>
            </div>
            <div className='blog_list'>
                {blogList.map((blogItem,index)=>{
                    return(
                        <BlogsBlock
                            key={index} 
                            bImg={blogItem.blogImage}
                            bDate={blogItem.blogDate}
                            bHead={blogItem.blogHead}
                            bCont={blogItem.blogCont}
                            bLinkText="READ MORE"
                            bLink={blogItem.blogId}
                        />
                    )
                })}
            </div>

            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><Link class="page-link" to="#"><img src="./assets/icons/pag_left.png"/></Link></li>
                    <li class="page-item active"><Link class="page-link" to="#">1</Link></li>
                    <li class="page-item"><Link class="page-link" to="#">2</Link></li>
                    <li class="page-item"><Link class="page-link" to="#">3</Link></li>
                    <li class="page-item"><Link class="page-link" to="#"><img src="./assets/icons/pag_right.png"/></Link></li>
                </ul>
            </nav>
        </div>
    </>
  )
}

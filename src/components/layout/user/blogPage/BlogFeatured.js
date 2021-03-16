import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { API_URL } from '../../../../helpers/user/urlCallAxios';

function BlogFeatured(props) {
    const history = useHistory();
    const { urlSeoCategoryBlog } = useParams();
    const onClickBlog = (id) => {
        history.push('/bai-dang/' + urlSeoCategoryBlog + '/' + id);
    };

    return (
        <>
            <h1 className='blog-title'>TIN NỔI BẬT</h1>
            <div className='featured-box'>
                <div className='featured'>
                    {props.blogs.map((blog, index) => (
                        <div className={index === 0 ? 'item-first' : 'item'} onClick={() => onClickBlog(blog.blogId)}>
                            <div className='img-featured'>
                                <img src={blog.photoUrl} />
                            </div>
                            <p>{blog.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default BlogFeatured;

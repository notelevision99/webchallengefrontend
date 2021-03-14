import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { API_URL } from '../../../../helpers/user/urlCallAxios';

function BlogFeatured(props) {
    const history = useHistory();

    const categoryBlogId = props.categoryBlogId;
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const urlblogs = `${API_URL}/api/blogs/categoryblogs/2?&pageNumer=1&pageSize=7`;

        axios.get(urlblogs, { withCredentials: true }).then((res) => {
            setBlogs(res.data.data);
        });
    }, [categoryBlogId]);

    const onClickBlog = (id) => {
        history.push(props.urlCurrent + '/' + id);
    };

    return (
        <>
            <h1 className='blog-title'>TIN NỔI BẬT</h1>
            <div className='featured-box'>
                <div className='featured'>
                    {blogs.map((blog, index) => (
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

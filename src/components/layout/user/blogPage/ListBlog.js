import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { API_URL } from '../../../../helpers/user/urlCallAxios';

function ListBlog(props) {
    const history = useHistory();

    const categoryBlogId = props.categoryBlogId;
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const urlblogs = `${API_URL}/api/blogs/categoryblogs/${categoryBlogId}?&pageNumer=1&pageSize=10`;

        axios.get(urlblogs, { withCredentials: true }).then((res) => {
            setBlogs(res.data.data);
        });
    }, [categoryBlogId]);

    const onClickBlog = (id) => {
        history.push(props.urlCurrent + '/' + id);
    };

    return (
        <>
            <div className='blog-grid'>
                <h1 className='blog-title'>DANH SÁCH {props.title}</h1>
                {blogs.map((blog) => (
                    <>
                        <br />
                        <div className='blog-card'>
                            <img src={blog.photoUrl} />
                            <div className='blog-description'>
                                <h1 onClick={() => onClickBlog(blog.blogId)}>{blog.title}</h1>

                                <h3>{blog.shortDescription}</h3>
                            </div>
                            <h3 className='blog-date'>
                                <strong>Ngày đăng: </strong>
                                {new Date(blog.createdDate).toLocaleDateString()}
                            </h3>
                        </div>
                        <br />
                        <hr />
                    </>
                ))}
            </div>
        </>
    );
}
export default ListBlog;

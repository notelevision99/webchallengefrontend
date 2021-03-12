import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '../../../../helpers/user/urlCallAxios';
import Banner from './Banner';

function BlogDetail(props) {
    const [blog, setBlog] = useState({});

    useEffect(() => {
        const urlblogs = `${API_URL}/api/blogs/${props.blogId}`;

        axios.get(urlblogs, { withCredentials: true }).then((res) => {
            setBlog(res.data);
        });
    }, [props.blogId]);

    return (
        <>
            <Banner title={props.categoryTitle} />
            <h1 className='category-title'>
                {blog.title}
                <div className='underlined-category-title'></div>
            </h1>
            <p className='content-blog' dangerouslySetInnerHTML={{ __html: blog.content }} />
        </>
    );
}

export default BlogDetail;

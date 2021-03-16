import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Banner from '../components/layout/user/blogPage/Banner';
import BlogDetail from '../components/layout/user/blogPage/BlogDetail';
import BlogRelate from '../components/layout/user/blogPage/BlogRelate';
import scrollToTop from '../helpers/user/ScrollToTop';
import { API_URL } from '../helpers/user/urlCallAxios';

function BlogDetailPage() {
    // URL params
    const { urlSeoBlog } = useParams();

    const [blogDetail, setBlogDetail] = useState({});
    const [blogsRelated, setBlogsRelated] = useState([]);

    useEffect(() => {
        const urlblogs = `${API_URL}/api/blogs/${urlSeoBlog}`;

        axios.get(urlblogs, { withCredentials: true }).then((res) => {
            setBlogDetail(res.data.item1);
            setBlogsRelated(res.data.item2);
            scrollToTop();
        });
    }, [urlSeoBlog]);

    return (
        <>
            <Banner title='R & D' />
            <BlogDetail title={blogDetail.title} content={blogDetail.content} />
            <BlogRelate blogs={blogsRelated} />
        </>
    );
}
export default BlogDetailPage;

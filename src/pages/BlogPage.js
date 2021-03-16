import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Banner from '../components/layout/user/blogPage/Banner';
import ListBlog from '../components/layout/user/blogPage/ListBlog';
import BlogFeatured from '../components/layout/user/blogPage/BlogFeatured';

import { API_URL } from '../helpers/user/urlCallAxios';

function BlogPage() {
    /**Paging State */
    const [activePage, setActivePage] = useState(1);
    const [totalItem, setTotalItem] = useState(0);
    const pageSize = 10;

    const [blogs, setBlogs] = useState([]);

    // Blogs is null
    const [isNull, setIsNull] = useState(false);

    // URL params
    const { urlSeoCategoryBlog } = useParams();

    useEffect(() => {
        const urlblogs = `${API_URL}/api/blogs/getblogsbyurlseo/${urlSeoCategoryBlog}?pageSize=${pageSize}&pageNumber=${activePage}`;

        axios
            .get(urlblogs, { withCredentials: true })
            .then((res) => {
                setBlogs(res.data.data);
                setTotalItem(res.data.totalCount);
                if (blogs.length !== 0) {
                    setIsNull(false);
                }
            })
            .catch(() => {
                setIsNull(true);
            });
    }, [activePage, blogs.length, urlSeoCategoryBlog]);

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

    return (
        <>
            <Banner title={blogs[0] && blogs[0].blogCategoryName} />
            {isNull === true ? (
                <h3 className='blog-title'>
                    Mục này hiện chưa có bài đăng. Chúng tôi sẽ cập nhật trong thời gian sớm nhất !!!
                </h3>
            ) : (
                <>
                    {urlSeoCategoryBlog === 'tin-tuc-nong-nghiep' && <BlogFeatured blogs={blogs} />}

                    <ListBlog
                        blogs={blogs}
                        //get category name
                        title={blogs[0] && blogs[0].blogCategoryName}
                        handlePageChange={() => handlePageChange}
                        activePage={activePage}
                        totalItem={totalItem}
                        pageSize={pageSize}
                    />
                </>
            )}
        </>
    );
}
export default BlogPage;

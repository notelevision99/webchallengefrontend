import Banner from '../components/layout/user/blogPage/Banner';
import BlogFeatured from '../components/layout/user/blogPage/BlogFeatured';
import ListBlog from '../components/layout/user/blogPage/ListBlog';

function NewsPage() {
    return (
        <>
            <Banner title='Tin Tức' />
            <BlogFeatured urlCurrent='/tin-tuc' />
            <ListBlog categoryBlogId='2' urlCurrent='/tin-tuc' title='tin tức' />
        </>
    );
}
export default NewsPage;

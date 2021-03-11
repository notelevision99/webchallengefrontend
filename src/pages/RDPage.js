import Banner from '../components/layout/user/blogPage/Banner';
import ListBlog from '../components/layout/user/blogPage/ListBlog';

function RDPage() {
    return (
        <>
            <Banner title='Tin Tức' />
            <ListBlog categoryBlogId='1' urlCurrent='/r-d' />
        </>
    );
}
export default RDPage;

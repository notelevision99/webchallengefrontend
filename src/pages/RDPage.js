import Banner from '../components/layout/user/blogPage/Banner';
import ListBlog from '../components/layout/user/blogPage/ListBlog';

function RDPage() {
    return (
        <>
            <Banner title='R & D' />
            <ListBlog categoryBlogId='1' urlCurrent='/r-d' title='r & d' />
        </>
    );
}
export default RDPage;

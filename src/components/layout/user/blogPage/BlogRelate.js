import { useHistory, useParams } from 'react-router';

function BlogRelate(props) {
    const history = useHistory();
    const { urlSeoCategoryBlog } = useParams();

    const onClickBlog = (id) => {
        history.push('/bai-dang/' + urlSeoCategoryBlog + '/' + id);
    };

    return (
        <div className='blog-related'>
            <h1 className='blog-title'>Bài viết liên quan</h1>
            <div className='blog-grid' id='style-7'>
                {props.blogs.map((blog) => (
                    <>
                        <br />
                        <div className='blog-card'>
                            <img src={blog.photoUrl} />
                            <div className='blog-description'>
                                <h3 className='title' onClick={() => onClickBlog(blog.blogId)}>
                                    {blog.title}
                                </h3>
                            </div>
                        </div>
                        <br />
                        <hr />
                    </>
                ))}
            </div>
        </div>
    );
}
export default BlogRelate;

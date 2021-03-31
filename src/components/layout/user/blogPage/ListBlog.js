import Pagination from 'react-js-pagination';
import { useHistory, useParams } from 'react-router';

function ListBlog(props) {
    const history = useHistory();
    const { urlSeoCategoryBlog } = useParams();

    const onClickBlog = (id) => {
        history.push('/bai-dang/' + urlSeoCategoryBlog + '/' + id);
    };

    return (
        <>
            <div className='blog-grid'>
                <h1 className='blog-title'>DANH SÁCH {props.title}</h1>
                {props.blogs.map((blog) => (
                    <>
                        <br />
                        <div className='blog-card'>
                            <img src={blog.photoUrl} />
                            <div className='blog-description'>
                                <h3 className='title' onClick={() => onClickBlog(blog.blogId)}>
                                    {blog.title}
                                </h3>

                                <h3 className='description'>{blog.shortDescription}</h3>
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
                <div className='row-pagination'>
                    <Pagination
                        innerClass='pagination pagination-xl m-0'
                        itemClass='page-item'
                        linkClass='page-link'
                        nextPageText={<i class='fas fa-step-forward'></i>}
                        prevPageText={<i class='fas fa-step-backward'></i>}
                        lastPageText={<i class='fas fa-fast-forward'></i>}
                        firstPageText={<i class='fas fa-fast-backward'></i>}
                        activePage={props.activePage}
                        itemsCountPerPage={props.pageSize}
                        totalItemsCount={props.totalItem}
                        pageRangeDisplayed={8}
                        onChange={props.handlePageChange()}
                    />
                </div>
            </div>
        </>
    );
}
export default ListBlog;

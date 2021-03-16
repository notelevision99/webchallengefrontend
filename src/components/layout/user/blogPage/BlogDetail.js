function BlogDetail(props) {
    return (
        <>
            <h1 ref={props.myRef} className='blog-title'>
                {props.title}
                <div className='underlined-category-title'></div>
            </h1>
            <div className='blog-content' dangerouslySetInnerHTML={{ __html: props.content }} />
        </>
    );
}

export default BlogDetail;

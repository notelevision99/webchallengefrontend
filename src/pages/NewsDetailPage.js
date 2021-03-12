import React from 'react';
import { useParams } from 'react-router';
import BlogDetail from '../components/layout/user/blogPage/BlogDetail';

function NewsDetailPage() {
    let { urlSeo } = useParams();
    return <BlogDetail blogId={urlSeo} categoryTitle='Tin Tức' />;
}
export default NewsDetailPage;

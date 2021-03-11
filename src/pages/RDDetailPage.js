import React from 'react';
import { useParams } from 'react-router';
import BlogDetail from '../components/layout/user/blogPage/BlogDetail';

function RDDetailPage() {
    let { urlSeo } = useParams();
    return <BlogDetail blogId={urlSeo} categoryTitle='R & D' />;
}
export default RDDetailPage;

import axios from 'axios';
import { useEffect, useState } from 'react';
import banner from '../../../../assets/images/banner/banner-1.jpg';
import { API_URL } from '../../../../helpers/user/urlCallAxios';
import CategoryCard from '../../../atom/user/categoryCard/CategoryCard';

function Banner(props) {
    const [categoriesBlog, setCategoriesBlog] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        const urlblogs = `${API_URL}/api/blogcategories/getlist`;

        axios.get(urlblogs, { withCredentials: true }).then((res) => {
            setCategoriesBlog(res.data);
        });
    }, []);

    return (
        <>
            <div className='after-header'></div>
            <div className='banner-box'>
                <div className='banner'>
                    <h1 className='title-page'>
                        Bài đăng <div className='underlined-title'></div>
                    </h1>

                    <img src={banner} />
                </div>
                <CategoryCard categories={categoriesBlog} />
            </div>
        </>
    );
}
export default Banner;

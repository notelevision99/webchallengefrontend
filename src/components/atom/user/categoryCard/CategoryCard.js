import { NavLink } from 'react-router-dom';

function CategoryCard(props) {
    return (
        <>
            <div className='category-card'>
                <div className='category-card-header'>
                    <h3 className='category-card-title'>Danh mục</h3>
                    <div className='line'></div>
                </div>
                <div className='category-card-body'>
                    <ul>
                        {props.categories.map((catrgory) => (
                            <li>
                                <NavLink
                                    itemID={catrgory.urlSeoCategoryBlog}
                                    to={'/bai-dang/' + catrgory.urlSeoCategoryBlog}
                                    className='item-category'>
                                    {catrgory.blogCategoriesName}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
export default CategoryCard;

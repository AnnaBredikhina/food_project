import { CategoryItem } from "./CategoryItem";

function CategoriesList(props) {
    const { catalog = [] } = props;

    return <div className="categories">
        {
            catalog.map(item => (
                <CategoryItem key={item.idCategory} {...item} />
            ))
        }
    </div>
}

export { CategoriesList };
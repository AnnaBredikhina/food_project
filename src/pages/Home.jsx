import { getAllCategories } from "../api";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {Preloader} from '../components/Preloader';
import { CategoriesList } from "../components/CategoriesList";
import { Search } from "../components/Search";

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filtredCatalog, setFiltredCatalog] = useState([]);

    const { pathname, search } = useLocation();
    const navigate = useNavigate();
    console.log(navigate);

    const handleSearch = (str) => {
        setFiltredCatalog(
            catalog.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase()))
        );
        navigate({
            pathname,
            search: `?search=${str}`
        })
    }

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories);
            setFiltredCatalog(search ?
                data.categories.filter((item) =>
                    item.strCategory
                        .toLowerCase()
                        .includes(search.split('=')[1].toLowerCase())
                ) : data.categories
            );
        })
    }, [search])

    return <div>
        <Search cb={handleSearch} />
        {!catalog.length ? <Preloader /> : (
            <CategoriesList catalog={filtredCatalog} />
        )}
    </div>
}

export { Home };
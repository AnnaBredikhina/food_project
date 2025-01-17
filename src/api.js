import { API_URL } from './config';

const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return await response.json();
}

const getFilteredCategory = async (category) => {
    const response = await fetch(API_URL + 'filter.php?c=' + category);
    return await response.json();
}

const getMealById = async (mealId) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
    return await response.json();
}

export { getAllCategories, getFilteredCategory, getMealById };
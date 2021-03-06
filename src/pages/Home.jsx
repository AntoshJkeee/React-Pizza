import React, {useCallback, useEffect} from 'react';
import {Categories, PizzaBlock, SortPopup, PizzaLoadingBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const categoryNames = ['Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    {name: 'популярности', type: 'popular', order: 'desc' },
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавиту', type: 'name', order: 'asc'}
]

function Home() {

    const dispatch = useDispatch()
    const items = useSelector(({ pizzas }) => pizzas.items)
    const cartItems = useSelector(({ cart }) => cart.items)
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
    const {category, sortBy} = useSelector(({filters}) => filters)

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
        // eslint-disable-next-line
    }, [category, sortBy]);

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
        // eslint-disable-next-line
        }, [],
    );

    const onSelectSortType = useCallback((type) => {
            dispatch(setSortBy(type))
            // eslint-disable-next-line
        }, [],
    );

    const handleAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category} onClickCategory={onSelectCategory} items={categoryNames}/>
                <SortPopup activeSortType={sortBy.type} onClickSortType={onSelectSortType} items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                { isLoaded ? items.map((element) => (<PizzaBlock
                    onClickAddPizza={handleAddPizzaToCart}
                    key={element.id}
                    addedCount={cartItems[element.id] && cartItems[element.id].items.length} {...element} />)) : Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index}/>) }
            </div>
        </div>
    );
}

export default Home;
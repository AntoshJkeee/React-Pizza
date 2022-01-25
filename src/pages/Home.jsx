import React from 'react';
import {Categories, PizzaBlock, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";

function Home() {

    const dispatch = useDispatch()
    const items = useSelector(({ pizzas }) => pizzas.items)

    const onSelectCategory = index => {
        dispatch(setCategory(index))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={onSelectCategory} items={['Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые']}/>
                <SortPopup items={
                    [
                        {name: 'популярности', type: 'popular'},
                        {name: 'цене', type: 'price'},
                        {name: 'алфавиту', type: 'alphabet'}
                    ]}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items && items.map((element) => (
                        <PizzaBlock key={element.id} {...element} />
                    ))
                }
            </div>
        </div>
    );
}

export default Home;
import React, {useState} from 'react';

function Categories({items, onClickItem}) {
    const [activeItem, setActiveItem] = useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index);
        onClickItem(index);
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                {
                   items && items.map((elem, index) => <li className={activeItem === index ? 'active' : ''} onClick={() => onSelectItem(index)} key={`${elem}_${index}`}>{elem}</li>)
                }
            </ul>
        </div>
    );
}

export default Categories;
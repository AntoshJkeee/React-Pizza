import React, {useState} from 'react';

function Categories({items}) {
    const [activeItem, setActiveItem] = useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>все</li>
                {
                   items && items.map((elem, index) => <li className={activeItem === index ? 'active' : ''} onClick={() => onSelectItem(index)} key={`${elem}_${index}`}>{elem}</li>)
                }
            </ul>
        </div>
    );
}

export default Categories;
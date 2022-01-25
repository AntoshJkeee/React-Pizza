import React from "react";
import {Header} from './components'
import {Cart, Home} from './pages'
import {Route, Routes} from "react-router-dom";

// packages
import axios from "axios";

// redux
import { useDispatch } from "react-redux";
import { setPizzas } from "./redux/actions/pizzas";




function App() {
    const dispatch = useDispatch(); // создаем хук который создает диспатч из редакса

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            dispatch(setPizzas(data.pizzas));
        })

    }, [dispatch])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/" element={ <Home /> }/>
                    <Route path="/cart" element={ <Cart/> }/>
                </Routes>
            </div>
        </div>
    );
}

export default App;

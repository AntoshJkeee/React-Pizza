import axios from "axios";

import {Header} from './components'
import {Cart, Home} from './pages'
import {Route, Routes} from "react-router-dom";
import {useEffect} from "react";

// redux
import { connect } from "react-redux";
import store from "./redux/store";
import { setPizzas } from "./redux/actions/pizzas";

function App(props) {
    const { items } = props



    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            window.store.dispatch(setPizzas(data.pizzas))
        })

    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home items={ items }/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
   return {
       items: state.pizzas.items
   }
}

export default connect(mapStateToProps)(App);

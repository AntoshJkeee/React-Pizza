import axios from "axios";

import {Header} from './components'
import {Cart, Home} from './pages'
import {Route, Routes} from "react-router-dom";
import {useEffect} from "react";

// redux
import { connect } from "react-redux";
import { setPizzas as setPizzasAction } from "./redux/actions/pizzas";

function App(props) {
    const { items } = props



    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            props.setPizzas(data.pizzas)
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

const mapDispatchToProps = dispatch => {
    return {
        setPizzas: (items) => dispatch(setPizzasAction(items)),
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

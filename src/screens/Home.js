import React, { useEffect, useState } from 'react';
import SingleProduct from '../components/SingleProduct/SingleProduct'
//import axios from 'axios'
const Home = (props) => {

    const [products, setProducts] = useState([])
    useEffect(async () => {
        const data = await fetch('https://fakestoreapi.com/products')
        const dataResponse = await data.json()
        console.log('dataResponse',dataResponse)
        setProducts(dataResponse)
    }, [])

    const productArr = products.map((product) => {
        return (
            <SingleProduct product={product} key={product.id}/>
        )
    })
    return (
        <div style={styles.container}>
            {productArr}
        </div>
    )

}
const styles = {
    container: {
        display: 'flex',
        justifyContent:'space-between',
        flexWrap: 'wrap',
        padding: "5rem",
    }
}

export default Home
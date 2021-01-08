import React, { useEffect, useState } from 'react';
import SingleProduct from '../components/SingleProduct/SingleProduct'
//import axios from 'axios'
const Home = (props) => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        itemAPIResponse()
    }, [])
    const itemAPIResponse = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
        const dataResponse = await data.json()
        setProducts(dataResponse)
    }

    const searchItems = (e) => {
        //  debugger
        e.preventDefault()
        const searchText = e.target?.value.toLowerCase()
        if (searchText) {
            const searchedProducts = products.filter((singleProduct) => {
                return singleProduct?.category?.toLowerCase().search(searchText) !== -1 || singleProduct?.title?.toLowerCase().search(searchText) !== -1
            })
            setProducts(searchedProducts)

        }
        else {

            itemAPIResponse()
        }

    }
    const productArr = products.map((product) => {
        return (
            <SingleProduct product={product} key={product.id} />
        )
    })
    return (
        <div style={styles.parent}>
            <div style={styles.searchBar}>
                <i className="fa fa-search" style={styles.searchIcon} aria-hidden="true"></i>
                <input type="text" style={styles.searchText} placeholder="Search products, brands and categories" onChange={searchItems} />
            </div>
            <div style={styles.container}>
                {productArr}
            </div>
        </div>
    )

}
const styles = {
    parent: {
        paddingTop: '1rem'
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: "5rem",
    },
    searchBar: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchIcon: {
        marginRight: '-29px',
        zIndex: '100',
        fontSize: '1.6rem',
        color: '#75757a'
    },
    searchText: {
        fontSize: '20px',
        flex: '0 0 40%',
        padding: '.7rem 0rem .7rem 2.5rem',
        outline: 'none',
        borderRadius: '5px'
    }
}

export default Home
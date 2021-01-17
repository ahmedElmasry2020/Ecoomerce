import React, { useEffect, useRef, useState } from 'react';
import Loading from '../components/Loading/Loading';
import SingleProduct from '../components/SingleProduct/SingleProduct';
import helpers from '../help/help'
//import axios from 'axios'
const Home = (props) => {

    const [loadingcom, isLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [sortOption, setOption] = useState(null)
    const sortSelection = useRef(null)
    useEffect(async () => {
        isLoading(true)
        const dataResponse=await itemAPIResponse()
        setProducts(dataResponse)
        isLoading(false)
    }, [])

    useEffect(async() => {
        debugger
        isLoading(true)
        const dataResponse=await itemAPIResponse()
        setProducts(dataResponse)
        isLoading(false)

    }, [sortOption])

    const itemAPIResponse = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
        const dataResponse = await data.json()
        return dataResponse
    }
    const searchItems = (e) => {

        e.preventDefault()
        const searchText = e.target?.value.toLowerCase()
        if (searchText) {
            const searchedProducts = products.filter((singleProduct) => {
                return helpers.wordInString(singleProduct?.category?.toLowerCase(), searchText) || helpers.wordInString(singleProduct?.title?.toLowerCase(), searchText)
            })
            if (searchedProducts.length > 0) {
                setProducts(searchedProducts)
            }
        }
        else {
            isLoading(true)
            itemAPIResponse().then(data => isLoading(false)).catch(err => {
                isLoading(false)
            })

        }

    }
    const selction = async() => {
        const sorting = sortSelection.current.value
        let highsortedProducts ;
        let lowsortedProducts;
        let allProducts ;
        if (sorting == 'high') {
            allProducts= await itemAPIResponse()
            highsortedProducts = allProducts.sort(helpers.dynamicSort('price')).slice(allProducts.length - 2, allProducts.length)
            setProducts(highsortedProducts)
                
        }
        else if (sorting == 'low') {
            allProducts= await itemAPIResponse()
            lowsortedProducts = allProducts.sort(helpers.dynamicSort('price')).slice(0, 2)
            setProducts(lowsortedProducts)            
        }
        else{
            allProducts= await itemAPIResponse()
            setProducts(allProducts)            
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
                <div style={styles.sorting}>
                    <label for="sort">Sort By:</label>
                    <select style={styles.sortingSelection} ref={sortSelection} id="sort" onChange={selction}>
                        <option>&#160;</option>
                        <option value="high">High</option>
                        <option value="low">Low</option>
                    </select>
                </div>
            </div>
            <div style={styles.container}>
                {loadingcom ? <Loading /> : productArr}
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
    }, sorting: {
        position: 'absolute',
        top: '0px',
        right: '3rem',
        fontSize: '1.5rem',
    },
    sortingSelection: {
        width: "90px",
        height: "28px",
        fontSize: '1.1rem',
        marginLeft: '10px'
    }

}

export default Home
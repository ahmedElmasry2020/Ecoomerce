import React from 'react';
import Rating from '../Rating/Rating';
import styles from './SingleProduct.module.scss';


const SingleProduct = ({ product }) => {
  
    return (
        <div className={styles.parent}>
            <div className={styles.imageContainer}>
                <img src={product.image} className={styles.image} alt="product"/>
            </div>
            <div className={styles.description}>
                <p className={styles.category}>{product.category}</p>
                <p className={styles.title}>{product.title}</p>
                <p className={styles.price}>{product.price}$</p>
                <Rating/>
            </div>
        </div>
    )
}

export default SingleProduct
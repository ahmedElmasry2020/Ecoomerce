import axios from 'axios';

const products_API = 'https://fakestoreapi.com/products'
export default function getProducts() {

    axios.get(products_API)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

// export default getProducts 
// const products = [
//     {
//         imgUrl: '',
//         type: '',
//         price: '',
//         rating: '',
//         numberReview: 2
//     },
//     {
//         imgUrl: '',
//         type: '',
//         price: '',
//         rating: '',
//         numberReview: 2
//     },
//     {
//         imgUrl: '',
//         type: '',
//         price: '',
//         rating: '',
//         numberReview: 2
//     }
// ]
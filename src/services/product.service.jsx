import axios from 'axios';

// Memanggil API
export const getProductsApi = (callback) => {
    axios.get('https://fakestoreapi.com/products')
        .then((response) => {

            // bawaan dasar API adalah price, tapi saya ingin menggunakan harga
            // Transformasi properti 'price' menjadi 'harga'
            const formattedData = response.data.map(product => {
                return {
                    ...product,
                    harga: product.price
                };
            });

            // Panggil callback dengan data yang telah diformat
            callback(formattedData);
        })
        .catch((error) => {
            console.log(error);
        });
};

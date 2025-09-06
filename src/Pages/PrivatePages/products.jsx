import React, {useEffect, useState} from 'react';
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:4000/products")
            setProducts(response.data)

        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, []);


    console.log(products)
    return (
        <div>
            <h1>Products</h1>

            <div className="w-full min-h-[70vh] flex justify-center
            gap-2
             items-center bg-green-500">
                {
                    products.map((product, index) => {
                            return <div
                                className="w-[200px]
                                 p-4 min-h-[200px] flex-col gap-8
                             flex justify-center items-center bg-blue-500"

                                key={index}
                                >
                                {product.images.map((image, index) =>
                                    <img
                                        key={index}
                                        width="180px"
                                        height="100px"
                                        src={image} alt=""/>
                                )}
                                <span>{product.name}</span>
                                <span>{product.price}</span>
                                {/*<span>{product.description}</span>*/}

                            </div>
                        }
                    )
                }
            </div>
        </div>
    );
};

export default Products;
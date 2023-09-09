
import { Row, Col } from 'react-bootstrap'

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useLocation} from 'react-router-dom'
import Product from '../components/Products'
import Loader from '../components/Loader'
import Message from '../components/Message'
import products from '../products'
import { listProducts } from '../actions/productActions'


function HomeScreen ()  {


    const dispatch = useDispatch() 
    const productList = useSelector(state => state.productList)
    const { error, loading, products} = productList
    const [selectedCategory, setSelectedCategory] = useState(1);
    const filteredProducts = products.filter(product => product.category === selectedCategory);
    


    useEffect(() => {
        dispatch(listProducts())

    }, [dispatch])

  return (
   

            <div>
                {loading ? <Loader />
        : error ? <Message variant='danger'>{error}</Message>
            :
            <div>
                <Row>
                    {filteredProducts.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
                {/* <Paginate page={page} pages={pages} keyword={keyword} /> */}
            </div>
             }
            </div>
            

            
  )
}

export default HomeScreen

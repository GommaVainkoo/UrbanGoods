import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'

function Product  ({product})  {
  return (
    <Card className="m-2 my-5 p-6 rounded" border='white'  >
    <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />

    <Card.Body>
            <Card.Title as="div">
                <strong>{product.name}</strong>
            </Card.Title>

        <Card.Text as="div">
            <div className="my-3">
                <Rating value={product.rating} text={`${product.no_Reviews} reviews`} color={'#eeeade'} />
                
            </div>
        </Card.Text>


        <Card.Text as="h4">
        ₹ {product.price}
        </Card.Text>
    </Card.Body>
    </Link>
</Card>
  )
}

export default Product
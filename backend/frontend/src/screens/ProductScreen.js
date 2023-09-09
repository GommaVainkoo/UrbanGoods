import React,{useState,useEffect} from 'react'
import { Link,useParams,useNavigate} from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Rating from '../components/Rating'
import { listProductDetails} from '../actions/productActions'

function ProductScreen() {
    
    const dispatch = useDispatch()
    const [qty, setQty] = useState(1)
    const history = useNavigate();
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails
    const { id } = useParams()
    useEffect(() => {
        dispatch(listProductDetails(id))

    }, [id,dispatch])

    const addToCartHandler = () => {
        history(`/cart/${id}?qty=${qty}`)
    }

 
  return (
    
    <div>
        <Link to='/' className='btn btn-light my-3'>Go Back</Link>
        {loading ?
                <Loader />
                : error
                    ? <Message variant='danger'>{error}</Message>
                    : (
        <div>
        <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.no_Reviews} reviews`} color={'#f8e825'} />
                </ListGroup.Item>

                <ListGroup.Item>
                    Price: ₹{product.price}
                </ListGroup.Item>

                <ListGroup.Item>
                    Description: {product.description}
                </ListGroup.Item>
            </ListGroup>
        </Col>

        <Col md={3}>
        <Card>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <Row>
                        <Col>Price:</Col>
                        <Col>
                            <strong>₹{product.price}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>Status:</Col>
                        <Col>
                            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                        </Col>
                    </Row>
                </ListGroup.Item>
                {product.stock > 0 && (
                    <ListGroup.Item>
                        <Row>
                            <Col>Qty</Col>
                            <Col xs='auto' className='my-1'>
                                <Form.Control
                                    as="select"
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                >
                                    {

                                        [...Array(product.stock).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))
                                    }

                                </Form.Control>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                )}
                <ListGroup.Item>
                            <Button 
                                onClick={addToCartHandler}
                                className='btn-block'
                                disabled={product.stock == 0}
                                type='button'>
                                Add to Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
        </div>)}
    </div>
  )
}

export default ProductScreen
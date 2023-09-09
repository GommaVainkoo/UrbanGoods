import React from 'react'
import {Card} from 'react-bootstrap'

import {Link} from 'react-router-dom'

function Category({category}) {

  return (
    <div>
            <Card className="my-5 p-6 rounded" border='white' >
                <Link to={category.name+`/product`}>
                    <Card.Img src={category.image} />

                <Card.Body>
                        <Card.Title as="div">
                            <strong>{category.name}</strong>
                        </Card.Title>
                </Card.Body>
                </Link>
            </Card>
    </div>
  )
}

export default Category
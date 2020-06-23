import React, { Fragment } from 'react';
import { Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';


const GridItems = ({ gif }) => {
    const {id, title, img} = gif;
    return (
        <Fragment>
            <Col md="3">
                <Card id={`id-card-${id}`}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title as="h6">{ title }</Card.Title>
                </Card.Body>
                </Card>
            </Col>
        </Fragment>
    )

};
export default GridItems;
GridItems.propTypes = {
    gif: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
    })
}

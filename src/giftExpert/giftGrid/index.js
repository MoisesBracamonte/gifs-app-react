import React, { useEffect, useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import GridItems from './items';
import './index.css';
import { fetchGifs } from '../../api/fetchGifs';

const GiftGrid = ({category}) => {
    const [images, setImages] = useState([]);

    useEffect( () => {
        fetchGifs(category).then( setImages );
    }, [ category ]);


    return (
        <Fragment>
            <Container>
                <Row>   
                    <Col md="12"  className="content-category animate__animated animate__fadeIn" >
                        <h3>{ category }</h3>
                        <Row>
                        {
                            images &&
                                images.map( (x, k) => {
                                    return (
                                                <GridItems key={ k } gif={ x } />
                                    )
                                })
                        }
                        </Row>

                    </Col>
                </Row>
            </Container> 
        </Fragment>


    )
}
export default GiftGrid;
GiftGrid.propTypes = {
    category : PropTypes.string.isRequired
}
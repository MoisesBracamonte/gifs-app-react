import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { 
    Form, 
    Button, 
    Alert } from 'react-bootstrap';

const GiftAdd = ({onChangeCategory}) => {
    const [inputValue, setInputValue] = useState('');
    const [show, setShow] = useState(true);


    const handleCategorySubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setInputValue('');
            onChangeCategory(inputValue);
        }else{ 
            setShow(false);
        }
    }

    return (
        <Fragment>
            <Alert variant="danger" onClose={ () => (setShow(true)) } dismissible hidden={show}>
                <Alert.Heading>Error al almacenar la categoria</Alert.Heading>
                <p> Agrega un valor correcto  </p>
            </Alert>
            <Form>
                <Form.Group controlId="id-category">
                    <Form.Label>Agregar categoria</Form.Label>
                    <Form.Control type="text" placeholder="Cual es la nueva categoria ?" onChange={ (e) => ( setInputValue(e.target.value)) } value={ inputValue }/>
                </Form.Group>
            <Button bg="bark" onClick={ handleCategorySubmit }>Agregar</Button>
            </Form>
        </Fragment>
    )
}
export default GiftAdd;
GiftAdd.propTypes = {
    onChangeCategory: PropTypes.func.isRequired
}
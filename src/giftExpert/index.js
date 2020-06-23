import React, { useState, Fragment } from 'react';
import GiftAdd from './giftAdd';
import GiftGrid from './giftGrid';

const GiftExpert = () => {

    const [categories, setCategories] = useState(["One punch"]);
    const onHandleCategoryChange = (e) => {
        setCategories([e, ...categories ]);
    }

    return (
        <Fragment>
        <GiftAdd onChangeCategory={ onHandleCategoryChange }/>
            <ol className="mt-3">
                { categories.map( (x, k) => <GiftGrid key={ x } category={ x } />) }
            </ol>
        </Fragment>
    )

}
export default GiftExpert;
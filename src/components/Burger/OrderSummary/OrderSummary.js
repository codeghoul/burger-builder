import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredients = Object.entries(props.ingredients)
    .map(([name, amount]) => ({ name, amount }));

  const ingredientSummary = ingredients.map(ingredient => {
    return <li key={ingredient.name}>
      <span style={{ textTransform: 'capitalize' }}>{ingredient.name}</span>: {ingredient.amount}
    </li>
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price:  {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
      <Button btnType='Danger' clicked={props.purchaseCancelled}>CANCEL</Button>
    </Aux>
  )
};

export default orderSummary;
import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log('[OrderSummary] componentWillUpdate.')
  }
  
  render() {
    const ingredients = Object.entries(this.props.ingredients)
      .map(([name, amount]) => ({ name, amount }));

    const ingredientSummary = ingredients.map(ingredient => {
      return <li key={ingredient.name}>
        <span style={{ textTransform: 'capitalize' }}>{ingredient.name}</span>: {ingredient.amount}
      </li>
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
        <Button btnType='Danger' clicked={this.props.purchaseCancelled}>CANCEL</Button>
      </Aux >
    )
  }
}
export default OrderSummary;
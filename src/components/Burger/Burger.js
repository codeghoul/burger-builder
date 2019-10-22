import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const Burger = (props) => {
  let transformedIngredients = [];

  for (let key in props.ingredients) {
    for (let i = 0; i < props.ingredients[key]; i++) {
      transformedIngredients.push(<BurgerIngredient key={key + i} type={key} />);
    }
  }

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients.</p>
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default Burger;
import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner'
import styles from './ContactData.module.css';
import axios from '../../../axios-orders';


class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({
      loading: true
    })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Jayesh Patel',
        address: {
          street: 'Test',
          zipCode: '310101',
          country: 'Gernman'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({
          loading: false
        });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({
          loading: false
        });
      });
  }

  render() {
    let form = (
      <form>
        <input className={styles.Input} type='text' name='name' placeholder='Your Name' />
        <input className={styles.Input} type='email' name='email' placeholder='Your Email' />
        <input className={styles.Input} type='text' name='street' placeholder='Your Street' />
        <input className={styles.Input} type='text' name='postal' placeholder='Your Posta' />
        <Button clicked={this.orderHandler} btnType="Success">Order Now</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={styles.ContactData}>
        <h4>Enter your contact data.</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;
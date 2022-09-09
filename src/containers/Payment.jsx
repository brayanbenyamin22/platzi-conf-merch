import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext';
import { handleSumTotal } from '../utils/index';
import pass from '../pass';
import '../styles/components/Payment.css';

const Payment = () => {
    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer } = state;
    const history = useNavigate();
    const clientId = pass.paypalPaymentClientID;

    const paypalOptions = {
        clientId: clientId,
        intent: 'capture',
        currency: 'USD',
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect',
    };

    const handlePaymentSuccess = (data) => {
        if(data.status === 'COMPLETED'){
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }
            addNewOrder(
                newOrder,
                history('/checkout/success')
            );
        }
    }
    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map((item) => {
                    return(
                        <div className="Payment-item" key={item.title}>
                            <div className="Payment-element">
                                <h4>{item.title}</h4>
                                <span>
                                    $
                                    {' '}
                                    {item.price}
                                </span>
                            </div>
                        </div>
                    );
                })}
                <div className="Payment-button">
                    <PayPalButton 
                        paypalOptions={paypalOptions}
                        style={buttonStyles}
                        amount={handleSumTotal(cart)}
                        onPaymentStart={()=> console.log('Start Payment')} 
                        onSuccess={data => handlePaymentSuccess(data)}
                        onError={error => console.log(error)}
                        onCancel={data => console.log(data)}
                    />
                    {/* <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal(cart)}
                        onPaymentStart={()=> console.log('Start Payment')}
                        onSuccess={data => handlePaymentSuccess(data)}
                        onError={error => console.log(error)}
                        onCancel={data => console.log(data)}
                    /> */}
                </div>
            </div>
        </div>
    );
}

export default Payment;
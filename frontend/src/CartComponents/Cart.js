import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import { COLORS } from "../Constants";
import { useHistory } from "react-router-dom";

//imported CartContyext to add reomve ites and calculate price on cart
// if there is no item conditionaly it will show an empty message
// used map to display some information of added items on the cartItems array
// calcuted total price of all items from the cartItems array

const Cart = () => {
  const { cartItems, setCartItems, onAdd, onRemove } = useContext(CartContext);
  const history = useHistory();

  //calculated price of items and conditionaly display those to the summary section
  console.log(cartItems, "hello from cart items");

  const itemsPrice = cartItems.reduce((a, c) => {
    return a + c.quantity * c.price;
  }, 0);

  const taxPrice = itemsPrice * 0.15;
  const shippingPrice = itemsPrice > 200 ? "Free" : 4.99;
  const totalPrice =
    shippingPrice === "Free"
      ? itemsPrice + taxPrice
      : itemsPrice + taxPrice + shippingPrice;

  const submitHandler = (e) => {
    e.preventDefault();

    let orderArray = cartItems.map((item) => {
      return {
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      };
    });

    fetch("/order/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderArray }),
    })
      .then((res) => res.json())
      .then((json) => {
        //reset this
        // set order items here
        return json.data;
      });
    setCartItems([]);
    history.push(`/order/success`);
  };

  return (
    <Grid>
      <OrderWrapper>
        {cartItems.length === 0 && (
          <EmptyMsg>Cart is empty now. Add items to view cart!</EmptyMsg>
        )}
        {cartItems.map((item) => (
          <AllOrders key={item._id}>
            <ItemImg src={item.imageSrc} alt={item.name} />
            <ItemName>{item.name}</ItemName>
            <ButtonWrap>
              <RemoveButton onClick={() => onRemove(item)}>-</RemoveButton>
              <AddButton onClick={() => onAdd(item)}>+</AddButton>
            </ButtonWrap>
            <Price>
              <span>{item.quantity}</span> x <span>{item.price}</span>
            </Price>
          </AllOrders>
        ))}
      </OrderWrapper>
      {cartItems.length !== 0 && (
        <OrderSummary>
          <Div1>
            <PriceDiv>
              <span>Price:</span> <span>${itemsPrice.toFixed(2)}</span>
            </PriceDiv>
            <PriceDiv>
              <span>Tax:</span> <span>${taxPrice.toFixed(2)}</span>
            </PriceDiv>
            <PriceDiv>
              <span>Delivery Charge:</span> <span>${shippingPrice}</span>
            </PriceDiv>
            <FinalPrice>
              <span>Total:</span> <span>${totalPrice.toFixed(2)}</span>
            </FinalPrice>
          </Div1>
          <Div2>
            <WrapperDiv>
              <label> Name:</label>

              <input type="email" name="email" required />
            </WrapperDiv>
            <WrapperDiv>
              <label> Address:</label>

              <input type="email" name="email" required />
            </WrapperDiv>
            <WrapperDiv>
              <label>Card No:</label>

              <input type="number" name="number" required />
            </WrapperDiv>
            <WrapperDiv>
              <label>Expiry:</label>

              <input type="date" name="date" required />
              <label>CVV:</label>

              <input type="number" name="number" required />
            </WrapperDiv>
          </Div2>
          <Div3>
            <Terms>
              <input type="checkbox" required></input>
              <label>Accept terms and condition</label>
            </Terms>

            <CheckoutButton onClick={submitHandler}>Checkout</CheckoutButton>
          </Div3>
        </OrderSummary>
      )}
    </Grid>
  );
};

const Grid = styled.div`
  margin: 2% 4%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: stretch;
  align-items: stretch;
  grid-gap: 0.5rem;
  @media (max-width: 675px) {
    grid-template-columns: 20rem;
  }
`;
const EmptyMsg = styled.div`
  font-size: 2rem;
  padding: 0.5rem;
  text-align: center;
  color: ${COLORS.primary};
`;

const AllOrders = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  padding: 0.5rem;
  margin: 0.3rem;
  grid-row: 1/3;
  background: ${COLORS.secondary};
  color: ${COLORS.primary};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`;

const ItemImg = styled.img`
  width: 5rem;
  height: 5rem;
  padding: 0.8rem;
  margin: auto;
  border: 1px solid #fff;
  border-radius: 0.6rem;
`;

const ItemName = styled.div`
  font-size: 1.5rem;
  width: 20rem;
  padding: 0.8rem;
  margin: 0 1rem;
`;
const ButtonWrap = styled.div`
  padding: 0.8rem;
  margin: 0 1rem;
`;
const Price = styled.div`
  padding: 0.5rem;
  font-size: 1.2rem;
  text-align: center;
  margin: 0.5rem;
  span {
    margin: 0 1rem;
  }
`;

const OrderSummary = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  justify-content: stretch;
  align-items: stretch;
  grid-gap: 0.5rem;
  font-size: 1.2rem;
  margin: 0.5rem;

  @media only screen and (max-width: 700px) {
    align-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const PriceDiv = styled.div`
  padding: 0.5rem;
  margin: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 1.2rem;
  }

  box-shadow: 0px 15px 10px -15px;
`;

const FinalPrice = styled.div`
  padding: 0.5rem;
  text-align: center;
  margin: 1rem;
  font-weight: 550;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 1.2rem;
  }
  box-shadow: 0px 15px 10px -15px;
`;
const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddButton = styled.button`
  color: green;
  border: none;
  background: none;
  margin: 0.5rem;
  border: 1px solid ${COLORS.primary};
  border-radius: 4px;
  &:hover {
    transition: all 0.3s ease-out;
    border: 1px solid green;
  }
`;
const RemoveButton = styled.button`
  color: red;
  border: none;
  background: none;
  margin: 0.5rem;
  border: 1px solid ${COLORS.primary};
  border-radius: 4px;
  &:hover {
    transition: all 0.2s ease-out;
    border: 1px solid red;
  }
`;
const CheckoutButton = styled.button`
  width: 90%;
  margin: 1rem;
  font-size: 1rem;
  border-radius: 0.4rem;
  padding: 0.6rem 2.5rem;
  background: ${COLORS.primary};
  color: ${COLORS.secondary};
  border: 1px solid ${COLORS.primary};
  &:hover {
    background: ${COLORS.secondary};
    color: ${COLORS.primary};
    transition: all 0.3s ease-in-out;
  }
`;

const Terms = styled.div`
  margin: 1rem;
  font-size: 1rem;
`;
const Div1 = styled.div`
  background: ${COLORS.secondary};
  color: ${COLORS.primary};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
const Div2 = styled.div`
  padding: 0.4rem;
  background: ${COLORS.secondary};
  color: ${COLORS.primary};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  /* div {
    margin: 0.3rem 0;
    box-shadow: 0px 15px 10px -15px;
  } */
  input {
    border: none;
    background: ${COLORS.secondary};
  }
`;

const WrapperDiv = styled.div`
  margin: 0.3rem 0;
  box-shadow: 0px 15px 10px -15px;
`;
const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: ${COLORS.secondary};
  color: ${COLORS.primary};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export default Cart;

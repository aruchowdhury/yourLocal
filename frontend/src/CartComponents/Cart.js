import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import { COLORS } from "../Constants";

//imported CartContyext to add reomve ites and calculate price on cart
// if there is no item conditionaly it will show an empty message
// used map to display some information of added items on the cartItems array
// calcuted total price of all items from the cartItems array

const Cart = () => {
  const { cartItems, setCartItems, onAdd, onRemove } = useContext(CartContext);

  //calculated price of items and conditionaly display those to the summary section

  const itemsPrice = cartItems.reduce((a, c) => {
    return a + c.quantity * c.price;
  }, 0);

  const taxPrice = itemsPrice * 0.15;
  const shippingPrice = itemsPrice > 200 ? "Free" : 10;
  const totalPrice =
    shippingPrice === "Free"
      ? itemsPrice + taxPrice
      : itemsPrice + taxPrice + shippingPrice;

  const submitHandler = (e) => {
    e.preventDefault();

    let itemQuantArray = [];
    cartItems.map((item) => {
      return itemQuantArray.push({ _id: item._id, quantity: item.quantity });
    });

    fetch("/order/add", {
      method: "POST",

      body: { itemQuantArray },
    }).then((data) => {
      console.log("data", data);
    });

    setCartItems([]);
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
            <PriceDiv>
              <span>{item.quantity}</span> x <span>{item.price}</span>
            </PriceDiv>
          </AllOrders>
        ))}{" "}
      </OrderWrapper>
      {cartItems.length !== 0 && (
        <OrderSummary>
          <ItemsPrice>
            <span>Price:</span> ${itemsPrice.toFixed(2)}
          </ItemsPrice>
          <Tax>
            <span>Tax:</span> ${taxPrice.toFixed(2)}{" "}
          </Tax>
          <Shipping>
            <span>Delivery Charge:</span> ${shippingPrice}
          </Shipping>
          <FinalPrice>
            <span>Total:</span> ${totalPrice.toFixed(2)}{" "}
          </FinalPrice>

          <Terms>
            <label>
              Accept terms and condition{" "}
              <input type="checkbox" required></input>{" "}
            </label>
          </Terms>

          <CheckoutButton onClick={submitHandler}>Checkout</CheckoutButton>
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
const PriceDiv = styled.div`
  padding: 0.5rem;
  font-size: 1.2rem;
  text-align: center;
  margin: 0.5rem;
  span {
    margin: 0 1rem;
  }
`;

const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-end;
  align-content: flex-end;
  font-size: 1.2rem;
  margin: 0.5rem;
  background: ${COLORS.secondary};
  color: ${COLORS.primary};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  @media only screen and (max-width: 700px) {
    align-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const ItemsPrice = styled.div`
  padding: 0.5rem;
  text-align: center;
  margin: 1rem;
  span {
    font-size: 1.2rem;
  }
  box-shadow: 0px 15px 10px -15px;
`;
const Tax = styled.div`
  padding: 0.5rem;
  text-align: center;
  margin: 1rem;
  span {
    font-size: 1.2rem;
  }
  box-shadow: 0px 15px 10px -15px;
`;
const Shipping = styled.div`
  padding: 0.5rem;
  text-align: center;
  margin: 1rem;
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
export default Cart;

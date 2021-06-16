import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import { COLORS } from "../Constants";
import { useHistory } from "react-router-dom";
import { SignInContext } from "../LoginComponents/SignInContext";

const Cart = () => {
  const { cartItems, setCartItems, onAdd, onRemove } = useContext(CartContext);
  const { currentUser } = useContext(SignInContext);
  const history = useHistory();

  //console.log(cartItems, "hello from cart items");

  const itemsPrice = cartItems.reduce((a, c) => {
    return a + c.quantity * c.price;
  }, 0);

  const taxPrice = itemsPrice * 0.15;
  const shippingPrice = itemsPrice > 50 ? "Free" : 2.99;
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
      body: JSON.stringify({ orderArray, orderedBy: currentUser._id }),
    })
      .then((res) => res.json())
      .then((json) => {
        //reset this
        // set order items here
        const orderId = json.data[json.data.length - 1]._id;
        setCartItems([]);
        history.push(`/order/success/${orderId}`);
      });
  };

  return (
    <Grid>
      <OrderWrapper>
        {cartItems.length === 0 && (
          <EmptyMsg>Cart is empty now. Add items to view cart!</EmptyMsg>
        )}
        {cartItems.map((item) => (
          <AllOrders key={item._id}>
            <ItemImg src={item.imgSrc} alt={item.name} />
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

              <Input
                type="email"
                name="email"
                placeholder="full name"
                required
              />
            </WrapperDiv>
            <WrapperDiv>
              <label> Address:</label>

              <Input
                type="text"
                name="address"
                placeholder=" address"
                required
              />
            </WrapperDiv>
            <WrapperDiv>
              <label>Card No:</label>

              <Input
                type="number"
                name="number"
                placeholder="0000 0000 0000 0000"
                required
              />
            </WrapperDiv>
            <WrapperDiv>
              <label>Expiry:</label>

              <Input1
                type="number"
                name="number"
                placeholder="mm yy"
                required
              />
              <label>CVV:</label>

              <Input1 type="number" name="number" placeholder=" XXX" required />
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
  grid-template-columns: 2fr 1.2fr;
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
  border-radius: 0.3rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);

    transform: translateY(-0.2rem);
  }

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
  width: 4rem;
  height: 4rem;
  padding: 0.8rem;
  margin: auto;
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
  grid-gap: 0.8rem;
  font-size: 1.1rem;
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
  border-radius: 0.5rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);

    transform: translateY(-0.2rem);
  }
`;
const Div2 = styled.div`
  padding: 0.4rem;
  background: ${COLORS.secondary};
  color: ${COLORS.primary};
  border-radius: 0.5rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);
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
  border-radius: 0.4rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);

    transform: translateY(-0.2rem);
  }
`;

const Input = styled.input`
  width: 70%;
  height: 1.8rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
  margin: 0.2rem 0.2rem 0.2rem 0;
  border: none;
  background: ${COLORS.secondary};
`;
const Input1 = styled.input`
  width: 30%;
  height: 1.8rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
  margin: 0.2rem 0.2rem 0.2rem 0;
  border: none;
  background: ${COLORS.secondary};
`;
export default Cart;

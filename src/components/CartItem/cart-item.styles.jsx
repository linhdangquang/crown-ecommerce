import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 70px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`

export const ItemDetails = styled.div`
  width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
`

export const NameItem = styled.span`
      font-size: 16px;
  
`

export const PriceItem = styled.span`
  font-size: 16px;
  font-weight: 500;
`
// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const CreditCardContainer = styled.div`
  height: 100vh;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #344e7a;
  padding: 25px;
`
export const CreditCardHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: #ffffff;
  text-decoration: underline;
  text-decoration-color: #ffd773;
`
export const CardImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 40vh;
  background-size: cover;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding-left: 45px;
  padding-top: 50px;
`
export const NumberHeading = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
`

export const CardHolderName = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ffffff;
`

export const PaymentCardContainer = styled.div`
  margin:20px;
  width: 50%;
  height: 30vh;
  background-color: #ffffff;
  border-radius: 8px;
  display:flex;
  flex-direction:column;
  justify-content:center:
  align-items:center;
  padding:40px;
  padding-bottom:60px;
  border:2px solid  #d3d9e0;
`
export const PaymentHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #344e7a;
  text-align: center;
`
export const InputCardNumber = styled.input`
  font-family: 'Roboto';
  height: 40px;
  color: #475569;
  padding: 20px;
  outline: none;
  border-radius: 5px;
  border-width: 1px;
  margin-bottom: 10px;
`

export const InputCardHolder = styled.input`
  font-family: 'Roboto';
  height: 40px;
  color: #475569;
  padding: 20px;
  outline: none;
  border-radius: 5px;
  border-width: 1px;
  margin-bottom: 10px;
`

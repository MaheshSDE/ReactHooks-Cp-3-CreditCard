// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CreditCardContainer,
  CreditCardHeading,
  CardImageContainer,
  Paragraph,
  PaymentCardContainer,
  PaymentHeading,
  InputCardNumber,
  InputCardHolder,
  NumberHeading,
  Container,
  CardHolderName,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumberInput, setNumberInput] = useState('')
  const [cardHolderInput, setHolderInput] = useState('')

  const onChangeNumberInput = event => {
    setNumberInput(event.target.value)
  }

  const onChangeHolderInput = event => {
    setHolderInput(event.target.value)
  }

  return (
    <MainContainer>
      <CreditCardContainer>
        <CreditCardHeading>CREDIT CARD</CreditCardHeading>
        <CardImageContainer data-testid="creditCard">
          <NumberHeading>{cardNumberInput}</NumberHeading>
          <Container>
            <Paragraph>CARDHOLDER NAME</Paragraph>
            <CardHolderName>{cardHolderInput.toUpperCase()}</CardHolderName>
          </Container>
        </CardImageContainer>
      </CreditCardContainer>
      <PaymentCardContainer>
        <PaymentHeading>Payment Method</PaymentHeading>
        <InputCardNumber
          type="text"
          placeholder="Card Number"
          value={cardNumberInput}
          onChange={onChangeNumberInput}
        />
        <InputCardHolder
          type="text"
          placeholder="Cardholder Name"
          value={cardHolderInput}
          onChange={onChangeHolderInput}
        />
      </PaymentCardContainer>
    </MainContainer>
  )
}
export default CreditCard

import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useContext, useState } from 'react'
import { FaMoneyBillWave } from "react-icons/fa";
import { TbClipboardList } from "react-icons/tb";

import UserContext from '../context/UserContext'

function SubscriptionPlan() {
  const id = useParams()
  const { user } = useContext(UserContext)
  const [plan, setPlan] = useState({
    i: '',
    name: '',
    image: '',
    price: '',
    perks: [],
  })
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardDigits, setCardDigits] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [ModalDisplau, setModalDisplay] = useState("none");
  const renderperk = perk()

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${id.id_plan}`,
      config,
    )
    promise.then((response) => setPlan(response.data))
  })

  function perk() {
    return plan.perks.map((perk, i) => <li key={i}>{perk.title}</li>)
  }

  function submit(e) {
    e.preventDefault();

  }

  return (
    <>
      <Container>
        <img src={plan.image} alt={plan.image} />
        <p>{plan.name}</p>
        <div className='beneficts'>
          <TbClipboardList style={{color: "#FF4791"}}/>
          <span>Benefícios:</span>
          <ol>{renderperk}</ol>
        </div>
        <div className='price'>
          <FaMoneyBillWave style={{color: "#FF4791"}}/>
          <span>Preço:</span>
          <p>R$ {plan.price} cobrados mensalmente</p>
        </div>
        <form onSubmit={submit}>
          <input 
            type="text"
            placeholder='Nome impresso no cartão'
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            required
          />
          <input 
            type="text"
            placeholder='Digitos do cartão'
            value={cardDigits}
            onChange={(e) => setCardDigits(e.target.value)}
            required
          />
          <div>
            <input 
              type="text"
              placeholder='Código de segurança'
              value={securityCode}
              onChange={(e) => setSecurityCode(e.target.value)}
              required
            />
            <input 
              type="text"
              placeholder='Validade'
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              required
            />
          </div>
          <button type='submit'>ASSINAR</button>
        </form>
      </Container>
      <Modal>
      </Modal>
    </>
  )
}

export default SubscriptionPlan

const Container = styled.div`
  background-color: #0E0E13;
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 13vh 10vw 5.1vh 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 37vw;
    height: 14.2vh;
    margin-bottom: 1.8vh;
  }

  > p {
    color: #FFFFFF;
    font-weight: bold;
    font-size: 4.8vh;
    line-height: 5.6vh;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 3.1vh;
  }

  .beneficts {
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    min-width: 100%;

    span {
      font-size: 2.4vh;
      margin-left: 1.33vw;
    }

    ol {
      margin-top: 1.5vh;
      margin-left: 3vh;
      list-style-type: decimal;
      font-size: 2.1vh;
      line-height: 2.4vh;
      
    }
  }

  .price {
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    min-width: 100%;
    box-sizing: border-box;
    margin-top: 1.8vh;

    span {
      font-size: 2.4vh;
      margin-left: 1.33vw;
    }

    p {
      margin-top: 0.6vh;
      font-size: 2.1vh;
      line-height: 2.4vh; 
    }
  }

  form {
    font-family: 'Roboto', sans-serif;
    font-size: 2.1vh;
    line-height: 2.4vh; 
    width: 80vw;
    margin-top: 5.1vh;
    box-sizing: border-box;
    justify-content: center;

    input {
      width: 80vw;
      height: 7.8vh;
      background-color: #FFFFFF;
      border: none;
      border-radius: 8px;
      padding-left: 3.7vw;
      margin-bottom: 1.2vh;
      box-sizing: border-box;

      &::placeholder {
        color: #7E7E7E;
      }
    }

    div {
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      width: 80vw;

      input {
        width: 38vw;
        padding-left: 1.8vw;
      }
    }

    button {
      width: 80vw;
      height: 7.8vh;
      background-color: #FF4791;
      color: #FFFFFF;
      font-family: 'Roboto', sans-serif;
      font-size: 2.1vh;
      line-height: 2.4vh; 
      font-weight: bold;
      border: none;
      border-radius: 8px;
    }
  }

`

const Modal = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`

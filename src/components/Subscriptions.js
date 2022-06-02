import axios from 'axios'
import { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'

import UserContext from '../context/UserContext'
import Plan from './Plan'

function Subscriptions() {
  const { user } = useContext(UserContext)
  const [plans, setPlans] = useState([])
  const renderPlans = plan()

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }
    const promisse = axios.get(
      'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships',
      config,
    )
    promisse.then((response) => setPlans(response.data))
    promisse.catch(() => alert('Erro no servidor!'))
  }, [])

  function plan() {
    return plans.map((plann, i) => (
      <Plan key={i} image={plann.image} price={plann.price} id={plann.id} />
    ))
  }

  return (
    <Container>
      <p>Escolha seu Plano</p>
      {renderPlans}
    </Container>
  )
}

export default Subscriptions

const Container = styled.div`
  background-color: #0e0e13;
  padding: 4.3vh 11.2vw 0.9vh 11.2vw;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 3.6vh;
    font-size: 4.8vh;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
  }
`

import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Plan({ image, price, id }) {
  return (
    <Container to={`/subscriptions/${id}`}>
      <img src={image} alt={image} />
      <p>R${price}</p>
    </Container>
  );
}

export default Plan

const Container = styled(Link)`
  background-color: #0e0e13;
  width: 77.3vw;
  height: 27vh;
  border-radius: 12px;
  border: 3px solid #7e7e7e;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 6.3vh 4.3vw;
  box-sizing: border-box;
  margin-bottom: 1.5vh;
  text-decoration: none;

  p {
    color: #ffffff;
    font-size: 3.6vh;
    font-weight: bold;
  }
`

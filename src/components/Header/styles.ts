import styled from 'styled-components'
import cover from '../../assets/Cover.png'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  display: flex;
  justify-content: center;
  padding-top: 4rem;
  background-image: url(${cover});
  background-repeat: no-repeat;
  background-size: cover;

  img {
    width: 9.25rem;
    height: 6.125rem;
  }
`

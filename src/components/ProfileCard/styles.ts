import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  background-color: ${(props) => props.theme.colors.baseProfile};
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
`
export const ProfileCardImage = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`

export const ProfileCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  header {
    display: flex;
    justify-content: space-between;

    > h3 {
      font-weight: 700;
      color: ${(props) => props.theme.colors.baseTitle};
      font-size: ${(props) => props.theme.fontSizes.xxxl};
      line-height: 130%;
    }

    > a {
      color: ${(props) => props.theme.colors.blue};
      font-weight: 700;
      font-size: ${(props) => props.theme.fontSizes.md};
      display: flex;
      gap: 0.5rem;
      align-items: center;
      text-transform: uppercase;
      text-decoration: none;
      border-bottom: solid 1px transparent;
      &:hover {
        border-bottom: solid 1px ${(props) => props.theme.colors.blue};
      }
    }
  }

  p {
    font-size: ${(props) => props.theme.fontSizes.lg};
    margin-top: 0.5rem;
  }

  footer {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1.5rem;
    > div {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;

      > span {
        color: ${(props) => props.theme.colors.baseSubtitle};
      }

      svg {
        color: ${(props) => props.theme.colors.baseLabel};
      }
    }
  }
`

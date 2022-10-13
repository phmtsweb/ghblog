import styled from 'styled-components'

export const IssueCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.colors.baseProfile};

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: none;
      display: flex;
      gap: 0.5rem;
      text-transform: uppercase;
      border-bottom: solid 1px transparent;
      color: ${(props) => props.theme.colors.blue};
      font-weight: 700;
      font-size: ${(props) => props.theme.fontSizes.sm};

      &:hover {
        border-bottom: solid 1px ${(props) => props.theme.colors.blue};
      }
    }
  }

  h2 {
    margin-top: 1.25rem;
    font-weight: 700;
    font-size: ${(props) => props.theme.fontSizes.xxxl};
    line-height: 130%;
  }

  footer {
    margin-top: 0.5rem;
    display: flex;
    gap: 2rem;
    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${(props) => props.theme.colors.baseSpan};
    }
  }
`

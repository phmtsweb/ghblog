import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.basePost};
  cursor: pointer;

  header {
    display: flex;
    justify-content: space-between;

    h4 {
      font-weight: 700;
      font-size: ${(props) => props.theme.fontSizes.xxl};
      color: ${(props) => props.theme.colors.baseTitle};
    }

    span {
      font-size: ${(props) => props.theme.fontSizes.md};
      color: ${(props) => props.theme.colors.baseSpan};
      min-width: 8rem;
      text-align: right;
    }
  }

  p {
    font-size: ${(props) => props.theme.fontSizes.lg};
    color: ${(props) => props.theme.colors.baseText};
  }
`

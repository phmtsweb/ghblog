import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h3 {
      font-weight: 700;
      color: ${(props) => props.theme.colors.baseSubtitle};
      font-size: ${(props) => props.theme.fontSizes.xl};
    }

    > span {
      color: ${(props) => props.theme.colors.baseSpan};
      font-size: ${(props) => props.theme.fontSizes.md};
    }
  }

  input {
    width: 100%;
    background-color: ${(props) => props.theme.colors.baseInput};
    padding: 0.75rem 1rem;
    border: solid 1px ${(props) => props.theme.colors.baseBorder};
    border-radius: 6px;
    color: ${(props) => props.theme.colors.baseText};
    font-size: ${(props) => props.theme.fontSizes.lg};
    &::placeholder {
      ${(props) => props.theme.colors.baseLabel}
    }

    &:focus {
      border: solid 1px ${(props) => props.theme.colors.blue};
    }
  }
`

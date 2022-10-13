import { formatDistance } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useNavigate } from 'react-router-dom'
import { CardContainer } from './styles'

interface CardProps {
  number: string
  title: string
  createdAt: string
  body: string
}

export function Card({ number, title, createdAt, body }: CardProps) {
  const navigate = useNavigate()
  function linkTo(issueNumber: string) {
    navigate(`/issue/${issueNumber}`)
  }

  return (
    <CardContainer onClick={() => linkTo(number)}>
      <header>
        <h4>{title}</h4>
        <span>
          {formatDistance(new Date(createdAt), new Date(), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </header>
      <p>{body.substring(0, 200)}</p>
    </CardContainer>
  )
}

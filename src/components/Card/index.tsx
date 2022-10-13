import { formatDistance } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { CardContainer } from './styles'

interface CardProps {
  id: string
  title: string
  createdAt: string
  body: string
}

export function Card({ id, title, createdAt, body }: CardProps) {
  const navigate = useNavigate()
  function linkTo(issueId: string) {
    navigate(`/issues/${issueId}`)
  }

  return (
    <CardContainer onClick={() => linkTo(id)}>
      <header>
        <h4>{title}</h4>
        <span>
          {formatDistance(new Date(createdAt), new Date(), {
            locale: {
              code: 'pt-BR',
            },
          })}
        </span>
      </header>
      <p>{body.substring(0, 200)}</p>
    </CardContainer>
  )
}

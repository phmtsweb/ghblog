import { formatDistance } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IssueCardContainer } from './styles'

interface IssueCardProps {
  url: string
  title: string
  username: string
  createdAt: string
  comments: number
}

export function IssueCard({
  url,
  title,
  username,
  createdAt,
  comments,
}: IssueCardProps) {
  return (
    <IssueCardContainer>
      <header>
        <Link to="/">
          <FaChevronLeft size={18} />
          Voltar
        </Link>
        <a href={url} target="_blank" rel="noreferrer">
          Ver no github
          <FaExternalLinkAlt size={18} />
        </a>
      </header>
      <h2>{title}</h2>
      <footer>
        <div>
          <FaGithub size={18} />
          {username}
        </div>
        <div>
          <FaCalendarDay size={18} />
          {formatDistance(new Date(createdAt), new Date(), {
            addSuffix: true,
            locale: ptBR,
          })}
        </div>
        <div>
          <FaComment size={18} />
          {comments ?? 0} {comments !== 1 ? ' comentários' : ' comentário'}
        </div>
      </footer>
    </IssueCardContainer>
  )
}

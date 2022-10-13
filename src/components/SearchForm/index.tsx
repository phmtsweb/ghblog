import { FormEvent, useState } from 'react'
import { SearchFormContainer } from './styles'

interface SearchFormProps {
  totalCount: number
  loadIssues: (q: string, username?: string, repo?: string) => Promise<void>
}

export function SearchForm({ loadIssues, totalCount }: SearchFormProps) {
  const [text, setText] = useState('')

  async function handleSearch(e: FormEvent, q: string) {
    e.preventDefault()
    await loadIssues(q)
  }
  return (
    <SearchFormContainer>
      <header>
        <h3>Publicações</h3>
        <span>
          {totalCount} {totalCount !== 1 ? ' publicações' : ' publicação'}
        </span>
      </header>
      <form onSubmit={(e) => handleSearch(e, text)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={() => loadIssues(text)}
        />
      </form>
    </SearchFormContainer>
  )
}

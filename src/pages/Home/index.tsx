import { useCallback, useEffect, useState } from 'react'
import { api } from '../../api'
import { Card } from '../../components/Card'
import { ProfileCard } from '../../components/ProfileCard'
import { SearchForm } from '../../components/SearchForm'
import { LayoutDefault } from '../../styles/layouts/default'
import { CardListContainer } from './styles'

interface IssueProps {
  total_count: number
  items: Array<{
    number: string
    title: string
    created_at: string
    body: string
  }>
}

export function Home() {
  const [issues, setIssues] = useState<IssueProps>({} as IssueProps)

  const loadIssues = useCallback(
    async (q: string, username = 'phmtsweb', repo = 'ghblog') => {
      const response = await api.get(
        `/search/issues?q=${encodeURIComponent(q)}%20repo:${username}/${repo}`,
      )

      setIssues(response.data)
    },
    [],
  )

  useEffect(() => {
    loadIssues('')
  }, [loadIssues])
  return (
    <LayoutDefault>
      <ProfileCard username="phmtsweb" />
      <SearchForm loadIssues={loadIssues} totalCount={issues.total_count} />
      <CardListContainer>
        {issues.items?.map((issue) => (
          <Card
            key={issue.number}
            number={issue.number}
            title={issue.title}
            body={issue.body}
            createdAt={issue.created_at}
          />
        ))}
      </CardListContainer>
    </LayoutDefault>
  )
}

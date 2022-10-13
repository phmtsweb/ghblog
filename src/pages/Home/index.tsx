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
    id: string
    title: string
    created_at: string
    body: string
  }>
}

export function Home() {
  const [issues, setIssues] = useState<IssueProps>({} as IssueProps)

  const loadIssues = useCallback(
    async (
      q = 'Boas práticas',
      username = 'rocketseat-education',
      repo = 'reactjs-github-blog-challenge',
    ) => {
      const response = await api.get(
        `/search/issues/q=${q}&repo:${username}/${repo}`,
      )

      setIssues(response.data)
    },
    [],
  )

  useEffect(() => {
    loadIssues()
  }, [loadIssues])
  return (
    <LayoutDefault>
      <ProfileCard username="Diego3g" />
      <SearchForm />
      <CardListContainer>
        {issues.items?.map((issue) => (
          <Card
            key={issue.id}
            id={issue.id}
            title={issue.title}
            body={issue.body}
            createdAt={issue.created_at}
          />
        ))}
      </CardListContainer>
    </LayoutDefault>
  )
}

import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { api } from '../../api'
import { IssueCard } from '../../components/IssueCard'
import { LayoutDefault } from '../../styles/layouts/default'
import { IssueContent } from './styles'

interface IssueData {
  title: string
  html_url: string
  user: {
    login: string
  }
  comments: number
  created_at: string
  body: string
}

export function Issue() {
  const [issue, setIssue] = useState<IssueData>({} as IssueData)
  const { issueNumber } = useParams()

  useEffect(() => {
    ;(async function () {
      const response = await api.get(
        `/repos/phmtsweb/ghblog/issues/${issueNumber}`,
      )
      setIssue(response.data)
    })()
  }, [issueNumber])
  return (
    <LayoutDefault>
      <IssueCard
        title={issue.title}
        url={issue.html_url}
        createdAt={issue.created_at || new Date().toISOString()}
        username={issue.user?.login}
        comments={issue.comments}
      />
      <IssueContent>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </IssueContent>
    </LayoutDefault>
  )
}

import {
  ProfileCardContainer,
  ProfileCardImage,
  ProfileCardInfo,
} from './styles'

import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUserFriends,
} from 'react-icons/fa'

import { useEffect, useState } from 'react'
import { api } from '../../api'

interface ProfileCardProps {
  username: string
}

interface User {
  name: string
  login: string
  avatar_url: string
  bio: string
  followers: number
  html_url: string
  company: string
}

export function ProfileCard({ username }: ProfileCardProps) {
  const [user, setUser] = useState<User>({} as User)

  useEffect(() => {
    ;(async function () {
      const response = await api.get(`/users/${username}`)
      setUser(response.data)
    })()
  }, [username])
  return (
    <ProfileCardContainer>
      <ProfileCardImage src={user.avatar_url} />
      <ProfileCardInfo>
        <header>
          <h3>{user.name}</h3>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            Github <FaExternalLinkAlt size={12} />
          </a>
        </header>
        <p>{user.bio}</p>
        <footer>
          <div>
            <FaGithub size={18} />
            <span>{user.login}</span>
          </div>
          {user.company && (
            <div>
              <FaBuilding size={18} />
              <span>{user.company}</span>
            </div>
          )}

          <div>
            <FaUserFriends size={18} />
            <span>
              {user.followers} seguidor{user.followers !== 1 && 'es'}
            </span>
          </div>
        </footer>
      </ProfileCardInfo>
    </ProfileCardContainer>
  )
}

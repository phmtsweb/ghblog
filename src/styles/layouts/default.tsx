import { ReactNode } from 'react'
import { Header } from '../../components/Header'
import { MainContent } from './styles-default'

interface LayoutDefaultProps {
  children?: ReactNode | ReactNode[]
}

export function LayoutDefault({ children }: LayoutDefaultProps) {
  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
    </>
  )
}

import { relative } from 'path'
import React from 'react'
import { FunctionComponent } from 'react'
import styled from 'styled-components'
import AppFooter from '../components/AppFooter'
import AppHeader from '../components/AppHeader/index'

const AppContentWrap = styled.div`
  height: auto;
  min-height: calc(100vh - 400px);
`

// Not fullscreen mode
const AppBaseLayout: FunctionComponent = ({ children }) => {
  return (
    <>
      <AppHeader />
      <AppContentWrap>{children}</AppContentWrap>
      <AppFooter />
    </>
  )
}

// App layout
const AppLayout: FunctionComponent = ({ children }) => {
  const isFullScreen = localStorage.getItem('FULLSCREEN_MODE')

  if (isFullScreen) return <div>{children}</div>
  return <AppBaseLayout>{children}</AppBaseLayout>
}

export default AppLayout

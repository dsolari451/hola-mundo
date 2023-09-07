import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {


  return (
    <>
      <TwitterFollowCard userName={'MiduDev'} name={'ElmiduDev'} isFollowing></TwitterFollowCard>
      <TwitterFollowCard userName={'Gbder'} name={'Gbder'}  isFollowing={false}></TwitterFollowCard>
    </>
  )
}

export default App

import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

export default function App() {
  return (
    <main className='w-screen h-screen'>
      <section className='absolute w-full top-0 left-0'>
      <Header />
      </section>
      <Hero />
 
      
    </main>
  )
}

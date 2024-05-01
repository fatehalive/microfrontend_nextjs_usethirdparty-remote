import { Inter } from 'next/font/google'
import Button from '@/components/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h2>localhost:3001</h2>
      <h1>REMOTE APP 1: VAHUB</h1>
      <Button/>
    </main>
  )
}

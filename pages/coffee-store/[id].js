import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'
const CoffeeStore = () => {
  
  const router = useRouter()
  console.log('router',router)
  
  return (
    <div>
    coffeeStore {router.query.id}
    <Link href="/">Back To home</Link>
    </div>
  )
}

export default CoffeeStore

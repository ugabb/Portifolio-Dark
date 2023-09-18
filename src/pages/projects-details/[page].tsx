'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react';

const page = () => {
  const search = useSearchParams().get('page');
  console.log({ search })

  const getProjectsDetails = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/projects');
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProjectsDetails()
  }, [])
  

  return (
    <div className='text-white'>{search}</div>
  )
}

export default page
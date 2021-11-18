import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export const Task = () => {
  const { id } = useParams()

  return (
    <div style={{ textAlign: 'center', fontSize: 24 }}>
      <h1>
        Вы перешли на Таску с{' '}
        <span style={{ color: 'blueviolet', fontWeight: 600 }}>ID {id}</span>
      </h1>
      <Link
        to='/'
        style={{
          display: 'inline-block',
          backgroundColor: 'violet',
          fontSize: 20,
          marginTop: 40,
          borderRadius: 15,
          padding: 5,
          color: '#fff',
        }}>
        Get back
      </Link>
    </div>
  )
}

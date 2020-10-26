import React from 'react'

export const Page3 = (props) => {

  const {user, password, country, city} = props

  return (
      <div>
        <h2>סיכום</h2>
        <div>
          <p>שם: {user}</p>
          <p>סיסמה: {password}</p>
          <p>ארץ: {country}</p>
          <p>עיר: {city}</p>
        </div>
      </div>
  )
}
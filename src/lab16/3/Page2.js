import React from 'react'

export const Page2 = (props) => {

  const {updateCountry, updateCity,country,city} = props;

  return (
      <div>
        <div>
          <input type={'text'} placeholder={'הכנס ארץ'} value={country}
                 onChange={(e) => updateCountry(e.target.value)}/>
        </div>
        <div>
          <input type={'text'} placeholder={'הכנס עיר מגורים'} value={city}
                 onChange={(e) => updateCity(e.target.value)}/>
        </div>
      </div>
  )
}
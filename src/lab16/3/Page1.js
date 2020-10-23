import React from 'react'

export const Page1 = (props) => {

  const {updateUser, updatePass,user,password} = props;

  return (
      <div>
        <div>
          <input type={'text'} placeholder={'הכנס שם'} value={user}
                 onChange={(e) => updateUser(e.target.value)}/>
        </div>
        <div>
          <input type={'password'} placeholder={'הכנס סיסמה'} value={password}
                 onChange={(e) => updatePass(e.target.value)}/>
        </div>
      </div>
  )
}
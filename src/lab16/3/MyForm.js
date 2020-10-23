import React, {useState} from 'react'
import {Page1} from "./Page1";
import {Page2} from "./Page2";
import {Page3} from "./Page3";

export const MyForm = (props) => {

  const [currentPage, setCurrentPage] = useState(0);
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')

  let allProps = {
    user: user,
    password: password,
    country: country,
    city: city,
    updateUser: (user) => setUser(user),
    updatePass: (pass) => setPassword(pass),
    updateCountry: (country) => setCountry(country),
    updateCity: (city) => setCity(city),
  }
  const pages = [
    <Page1 {...allProps}/>,
    <Page2  {...allProps}/>,
    <Page3 {...allProps}/>
  ]

  return (
      <div>
        <button onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage == 2}>Next
        </button>
        <button onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage == 0}>Previous
        </button>
        <p>------------------------------------------</p>
        <div>
          {pages[currentPage]}
        </div>
      </div>
  )
}
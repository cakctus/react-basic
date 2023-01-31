import React from "react"
import ReactDOM from "react-dom"
import { createRoot } from "react-dom/client"

import bookObj from "./Books/bookObj"
import Book from "./Books/Book"

import "./index.css"

const InputEmail = () => <input type="email" />
const InputPassword = () => <input type="password" />
const Button = () => <button type="send">Login</button>
const text = "Login"

/*
const LoginForm = () => {
  return (
    <div className='login'>
      <Login login={loginObj[0]} >
        <p>Lorem ipsum dolor sit amet.</p>
      </Login>
      
    </div>
  ) 
}
*/

const Books = () => {
  return (
    <div className="articles">
      {bookObj.map((books, index) => {
        return (
          <Book book={books} key={index}>
            <br />
            children
          </Book>
        )
      })}
    </div>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Books />
  </React.StrictMode>
)

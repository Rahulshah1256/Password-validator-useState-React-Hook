// Write your code here
import {useState} from 'react'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const handlePassword = event => {
    setPassword(event.target.value)
  }

  const validatePassword =
    password.length > 8 ? '' : 'Your password must be at least 8 characters'

  return (
    <div>
      <h1> Password Validator</h1>
      <p>Check how strong and secure is your password</p>
      <input type="Password" onChange={handlePassword} placeholder="Password" />
      <p>{validatePassword}</p>
    </div>
  )
}

export default PasswordValidator

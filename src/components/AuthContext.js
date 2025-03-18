import React,{useContext} from 'react'
import { DataContext } from './App'

function AuthContext() {
    const data = useContext(DataContext)
  return (
    <div>{data}

    </div>
  )
}

export default AuthContext
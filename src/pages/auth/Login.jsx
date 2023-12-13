import FormAuthLanding from '../../components/FormAuthLanding'
import Input from '../../components/Input'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import React from 'react'
import Layout from '../../components/Layout'
import { useAuth } from './AuthProvider'

function LoginPage() {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [errorResponse, setErrorResponse] = React.useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          const response = await fetch(import.meta.env.VITE_API_URL + "/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email,
              password
            }),
            mode: 'cors'
          });
          if (response.ok) { // retorna status: 200
            setErrorResponse(null)
            //goTo("/")
            console.log("El usuario inicio sesion correctamente")
          }else{
            const data = await response.json()
            setErrorResponse(data)
          }
        } catch (error) {
          console.log(error)
        }
      }

    const goTo = useNavigate()
    const auth = useAuth() // verifica si el usuario esta autenticado
    if (auth.isAuth) {
        return (<Navigate to="/" />)
    }
    return (
        <Layout>
            <FormAuthLanding>
                <div className="w-full py-6 z-20">
                    <h1 className="text-4xl my-6">Welcome bark :3</h1>
                    <form onSubmit={handleSubmit} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                        {!!errorResponse && ( <p className="text-red-500 text-xs italic">{errorResponse.message}</p>)}
                        <div className="pb-2 pt-4">
                            <Input onChange={(e) => setEmail(e.target.value)} name={"email"} id={"email"} type={"email"} placeholder={"Email"} value={email} />
                        </div>
                        <div className="pb-2 pt-4">
                            <Input onChange={(e) => setPassword(e.target.value)} id={"password"} name={"password"} placeholder={"Password"} type={"password"} value={password} />
                        </div>
                        <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                            <Link to="/recovery-password">Forgot your password?</Link>
                        </div>
                        <div className="px-4 pb-2 pt-4">
                            <button className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">sign in</button>
                        </div>
                    </form>
                </div>
            </FormAuthLanding>
        </Layout>
    )
}

export default LoginPage
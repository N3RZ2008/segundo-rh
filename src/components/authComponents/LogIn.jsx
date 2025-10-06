import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { signIn, signOut } from "../../auth/useAuth"

import bg from "../../assets/bg.jpg"
import "../styles/form.css"

export default function Login({ logout = false }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    async function logOut() {
        try {
            await signOut()
            navigate("/login")
        } catch (error) {
            alert(error.message)
        }
    }
    if (logout) {
        logOut()
        alert("User successfully logged out")
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await signIn(email, password)
            alert("User successfully logged in")
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
            <div style={
                {
                    display: "flex",
                    justifyContent: "center",
                    height: "70vh",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundImage: `url(${bg})`
                }
            }>
                <div className="formDiv">
                    <h1 style={
                        { fontSize: "5rem", }
                    }>Logar</h1>
                    <form onSubmit={handleSubmit} style={
                        {
                            display: "flex",
                            flexDirection: "column",
                            padding: "20px 0",
                            gap: "10px",
                            alignItems: "center"
                        }
                    }>
                        <input
                            type="email"
                            value={email}
                            onChange={e => { setEmail(e.target.value) }}
                            placeholder="E-Mail"
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={e => { setPassword(e.target.value) }}
                            placeholder="Senha"
                        />
                        <button type="submit" style={
                            { width: "fit-content" }
                        }>Logar</button>
                    </form>
                    <Link className="formA" to={"/signup"}>Não tem uma conta?</Link>
                </div>
            </div>
        </>
    )
}
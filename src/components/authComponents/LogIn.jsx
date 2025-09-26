import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signIn, signOut } from "../../auth/useAuth"
import { Container } from "../pageComponents"

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
            <Container style={
                { height: "70vh", flexDirection: "column", alignItems: "center", }
            }>
                <div style={
                    { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px"}
                }>
                    <h1 style={
                        { fontSize: "4rem", }
                    }>Logar</h1>
                    <form onSubmit={handleSubmit}>
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
                        <button type="submit">Logar</button>
                    </form>
                    <Link className="formA" to={"/signup"}>Não tem uma conta?</Link>
                </div>
            </Container>
        </>
    )
}
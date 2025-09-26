import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signUp } from "../../auth/useAuth"
import { Container } from "../pageComponents"

export default function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    async function handleSubmit(e) {
        // return alert("Sign up temporarily disabled")
        e.preventDefault()
        try {
            const data = await signUp(email, password)
            navigate("/")
            alert("User successfully registered")
        } catch (error) {
            alert(error.message)
        }
    }

    return <>
        <Container style={
            { height: "70vh", flexDirection: "column", alignItems: "center", }
        }>
            <div style={
                { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px" }
            }>
                <h1 style={
                    { fontSize: "4rem" }
                }>Registrar</h1>
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
                    <button type="submit">Registrar</button>
                </form>
                <Link className="formA" to={"/login"}>Já tem uma conta?</Link>
            </div>
        </Container>
    </>
}
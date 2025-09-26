import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { signUp } from "../../auth/useAuth"

import Modal from "../Modal"
import { Container } from "../pageComponents"

export default function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        if (!isChecked) {
            return alert("Você precisa estar de acordo com os termos para se registrar")
        }
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
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <h1 className="terms">1. Objeto</h1>
            <p className="terms">A plataforma Capacita Aí é um projeto educacional com o objetivo de fornecer cursos, aulas e conteúdos informativos para adolescentes e jovens adultos. Nosso foco é o desenvolvimento de habilidades socioemocionais e competências essenciais para a inserção no mercado de trabalho.</p>

            <h1 className="terms">2. Condições de Acesso e Cadastro</h1>
            <ul>
                <li className="terms">Público Alvo: A plataforma é voltada para adolescentes e jovens adultos. Não há restrição de idade para o cadastro e uso da plataforma.</li>
                <li className="terms">Informações de Cadastro: O Usuário é responsável por fornecer informações precisas, completas e verdadeiras no momento do cadastro. É obrigatório manter esses dados atualizados para garantir a qualidade do serviço.</li>
                <li className="terms">Segurança da Conta: A senha criada é pessoal e intransferível. O Usuário é o único responsável pela segurança de sua conta e por todas as atividades que nela ocorram. Em caso de uso não autorizado, o Usuário deve notificar o Capacita Aí imediatamente para que as devidas providências sejam tomadas.</li>
            </ul>

            <h1 className="terms">3. Propriedade Intelectual e Uso do Conteúdo</h1>
            <ul>
                <li className="terms">Conteúdo da Plataforma: Todo o conteúdo da plataforma Capacita Aí, incluindo aulas, vídeos, textos, gráficos, imagens, logotipos e o software, é de propriedade exclusiva do projeto ou de terceiros que nos concederam o direito de uso. </li>
                <li className="terms">Restrições de Uso: O conteúdo do Capacita Aí é fornecido apenas para uso pessoal e não comercial. É estritamente proibido:</li>
                <ul>
                    <li className="terms">Copiar o conteúdo de forma pública ou privada, sem autorização expressa e por escrito.</li>
                    <li className="terms">Vender, licenciar ou explorar comercialmente qualquer material da plataforma.</li>
                    <li className="terms">Plagiar o conteúdo para criar materiais próprios ou de terceiros.</li>
                </ul>
            </ul>

            <h1 className="terms">4. Privacidade e Proteção de Dados</h1>
            <ul>
                <li className="terms">Coleta e Uso de Dados: O Capacita Aí se compromete a proteger a privacidade de seus usuários. Coletamos apenas os dados essenciais para o funcionamento da plataforma, como informações de cadastro e dados de uso (quais aulas foram assistidas, por exemplo), com o objetivo de melhorar a experiência do usuário.</li>
                <li className="terms">Confidencialidade: Nenhum dado pessoal é vendido, alugado ou cedido a terceiros para fins comerciais, exceto quando exigido por lei. Nosso tratamento de dados é regido pela Lei Geral de Proteção de Dados (LGPD).</li>
                <li className="terms">Segurança: Implementamos medidas de segurança técnicas e administrativas para proteger as informações dos usuários contra acesso não autorizado, alteração, divulgação ou destruição.</li>
            </ul>

            <h1 className="terms">5. Regras de Conduta do Usuário</h1>
            <p className="terms">Ao utilizar a plataforma, o Usuário se compromete a:</p>
            <ul>
                <li className="terms">Não violar as leis e regulamentos vigentes no Brasil.</li>
                <li className="terms">Não praticar atos de pirataria, "hacking" ou qualquer atividade ilegal.</li>
                <li className="terms">Não postar ou transmitir conteúdo ofensivo, difamatório, ameaçador, obsceno, ou que promova o ódio ou discriminação.</li>
                <li className="terms">Não enviar "spam" ou publicidade não autorizada.</li>
                <li className="terms">Não tentar interferir na operação do site, em seus servidores ou redes.</li>
            </ul>


            <h1 className="terms">6. Limitação de Responsabilidade</h1>
            <p className="terms">O Capacita Aí se esforça para manter a plataforma funcionando de forma segura e com conteúdo de alta qualidade, mas não garante que o serviço será ininterrupto, livre de erros ou totalmente seguro. A utilização da plataforma é por conta e risco do Usuário. O Capacita Aí não se responsabiliza por perdas, danos ou prejuízos de qualquer natureza decorrentes do uso ou da impossibilidade de uso de seus serviços.</p>

            <h1 className="terms">7. Disposições Finais</h1>
            <ul>
                <li className="terms">Alterações nos Termos: O Capacita Aí se reserva o direito de modificar estes Termos de Uso a qualquer momento. A versão atualizada entrará em vigor imediatamente após sua publicação.</li>
                <li className="terms">Lei Aplicável e Foro: Estes Termos de Uso são regidos e interpretados de acordo com a legislação brasileira.</li>
            </ul>

            <label className="terms">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={e => { setIsChecked(e.target.checked) }}
                />
                Li e estou de acordo com todos os termos
            </label>

            <button onClick={handleSubmit} >Registrar</button>

        </Modal>

        <Container style={
            { height: "70vh", flexDirection: "column", alignItems: "center", }
        }>
            <div style={
                { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px" }
            }>
                <h1 style={
                    { fontSize: "4rem" }
                }>Registrar</h1>
                <form>
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
                </form>
                <button onClick={() => { setIsOpen(true) }}>Registrar</button>
                <Link className="formA" to={"/login"}>Já tem uma conta?</Link>
            </div>
        </Container>
    </>
}
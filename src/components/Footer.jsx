import "./styles/footer.css"

export default function Footer() {
    return <div className="footer">
        <h1 className="logo">Segundo RH</h1>
        <p className="copyright">@ 2025 Segundo RH. Todos os direitos reservados</p>
        <div className="contato">
            <h1>Contato</h1>
            <ul>
                <li>Contato 1</li>
                <li>Contato 2</li>
                <li>Contato 3</li>
                <li>Contato 4</li>
            </ul>
        </div>
        <div className="endereco">
            <h1>Endereço</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas tempor est, in mollis ligula. Curabitur massa dolor, faucibus porta dapibus at, egestas non lectus.</p>
        </div>
    </div>
}
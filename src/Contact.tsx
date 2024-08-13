import { useNavigate } from "react-router-dom"


export const Contato = () => {
    const navigate = useNavigate();

    const retornar = () => {
        navigate("/")
    }

    const enviar = () => {
        alert("Agradecemos pelo seu contato!")
        navigate("/")
    }

    return (

        <div>

            <h1>Contato</h1>

            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" placeholder="name"/>

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="email"/>

            <br/>

            <button onClick={retornar}>Retornar para Main</button>
            <button onClick={enviar}>Enviar</button>
        </div>

    );

}
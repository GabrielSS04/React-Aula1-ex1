import { useNavigate } from "react-router-dom"

export const Main = () => {

    const navigate = useNavigate();

    const toContact = () => {
        navigate("/contact")
    }

    return (

        <div>
            <nav>
                <button onClick={toContact}>Contato</button>
            </nav>
        </div>

    );

}
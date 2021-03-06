
import { useHistory } from 'react-router-dom'
import useForm from '../Hooks/UseForm'
import { vaiPraCadastro } from '../Routes/cordination'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import { login } from '../Services/acessRequest'
import { CardLogin, FormContainer } from '../Styled/styledComponents'

const FormularioLogin = () => {

    const history = useHistory()
    const [form, handleInputChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history)
    }

    return (
        <CardLogin>
            <h1>LOGIN</h1>
            <FormContainer>
                <form onSubmit={onSubmitForm}>

                    <TextField
                        variant="outlined"
                        color="primary"
                        fullWidth
                        margin={"normal"}
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        label="email"
                        type="email"
                        required
                    ></TextField>

                    <TextField
                        variant="outlined"
                        color="primary"
                        fullWidth
                        margin={"normal"}
                        name="password"
                        value={form.password}
                        onChange={handleInputChange}
                        label="senha"
                        type="password"
                        required
                    ></TextField>

                    <Button
                        variant="contained"
                        color="secondary"
    
                        type="submit">Entrar</Button>

                </form>

                <Button
                    variant="outlined"
                    color="default"
                    onClick={() => vaiPraCadastro(history)}>Cadastre-se</Button>
            </FormContainer>

        </CardLogin>
    )
}

export default FormularioLogin
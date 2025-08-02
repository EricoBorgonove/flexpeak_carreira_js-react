import {Button, Container, Typography} from "@mui/material";
import { Link } from "react-router-dom";

const NewHome = () =>{
    return (
        <Container sx={{textAlign:"center", mt: 10}}>
            <Typography variant="h3" gutterBottom>
                    Bem-Vindo a essa bagaça
            </Typography>
            <Typography variant="body1" gutterBottom>
                    Feito com todo amor e carinho e um pouco de ódio
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/sobre">
                Saiba Mais sobre nós
            </Button>
        </Container>
    )
}

export default NewHome
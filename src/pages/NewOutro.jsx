import {Button, Card, CardContent, Container, Typography} from "@mui/material";
import { Link } from "react-router-dom";

const NewOutro = () => {
  return (
    <Container sx={{textAlign:"center", mt: 10}}>
        <Typography variant="h3" gutterBottom>
            Outro
        </Typography>
        <Card sx={{maxWidth: 900, mx: "auto", my:2, boxShadow:3}}>
            <CardContent>
                <Typography variant="body1">
                  Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si num tem leite então bota uma pinga aí cumpadi!
                  Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá.
                  A ordem dos tratores não altera o pão duris. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Per aumento de cachacis, eu reclamis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.
                </Typography>
            </CardContent>
        </Card>
        <Button variant="contained" color="primary" component={Link} to="/">
                Home
            </Button>
    </Container>
  )
}

export default NewOutro
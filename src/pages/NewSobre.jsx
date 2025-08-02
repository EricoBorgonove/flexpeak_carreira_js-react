import {Button, Card, CardContent, Container, Typography} from "@mui/material";
import { Link } from "react-router-dom";

const NewSobre = () => {
  return (
    <Container sx={{textAlign:"center", mt: 10}}>
        <Typography variant="h3" gutterBottom>
            Sobre nós
        </Typography>
        <Card sx={{maxWidth: 500, mx: "auto", my:2, boxShadow:3}}>
            <CardContent>
                <Typography variant="body1">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim pariatur ea quia temporibus! Mollitia quidem eligendi fuga nam earum. Tempore ut in illum deserunt molestiae earum pariatur et at aliquam.
                     Dolore inventore atque repellendus, recusandae repudiandae a reprehenderit et quas omnis quis voluptatem eligendi qui facere voluptatum, ipsam libero amet assumenda voluptates quia. Animi eaque molestias adipisci earum at exercitationem.
                     Officiis ipsum magni, suscipit perferendis doloremque molestias, quasi voluptatibus eos tempore nihil ut voluptates inventore veniam, exercitationem nesciunt voluptas repellat velit temporibus non ad! Cum minus porro voluptatum repudiandae cupiditate!
                </Typography>
            </CardContent>
        </Card>
        <Button variant="contained" color="primary" component={Link} to="/">
                Home
            </Button>
    </Container>
  )
}

export default NewSobre
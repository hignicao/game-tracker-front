import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";


export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();




  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast('As senhas devem ser iguais!');
    } else {
      try {
        // await signUp(email, password);
        toast.success('Inscrito com sucesso! Por favor, faça login.');
        navigate('/sign-in');
      } catch (error) {
        toast.error('Não foi possível fazer o cadastro!');
      }
    }
  };

  return (
      <Container maxWidth="xs">
        <SignUpBox>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}/>
          <h5>Cadastre-se</h5>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormTextField
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nome"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormTextField
                  required
                  fullWidth
                  id="username"
                  label="Nome de usuário"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <FormTextField
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <FormTextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <SignUpButton type="submit" variant="contained">Cadastrar</SignUpButton>
            <LinkText to={"/sign-in"}>
              Já tem uma conta? Entre agora!
            </LinkText>
          </Box>
        </SignUpBox>
      </Container>
  );
}


const SignUpButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`

const SignUpBox = styled(Box)`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h5 {
    font-size: 24px;
  }
`

const LinkText = styled(Link)`
  text-decoration: none;
	color: #ffffff;
`;

const FormTextField = styled(TextField)`
  background-color: #151323;
  label {
    color: white;
  }
  input {
    color: white;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:active{
    box-shadow: 0 0 0 30px #a99cc2 inset;
  }
`
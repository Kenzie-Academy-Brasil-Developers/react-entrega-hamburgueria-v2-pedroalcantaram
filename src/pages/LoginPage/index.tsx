import React, { useContext } from "react";
import { Container } from "../../styles/Global";
import Logo from "../../assets/logo.svg";
import {
  ThemeParagraphy,
  ThemeSpan,
  ThemeTitle,
} from "../../styles/Typography";
import { useForm } from "react-hook-form";
import { InputsForm } from "../../components/Inputs";
import { StyledLoginPage } from "./style";
import { ThemeButton } from "../../styles/Buttons";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { CgShoppingBag } from "react-icons/cg";

interface iLoginData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();

  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iLoginData>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const submit = (data: iLoginData) => {
    userLogin(data);
    reset();
  };

  return (
    <Container>
      <StyledLoginPage>
        <section className="sectionInfo">
          <img src={Logo} alt="logo" />
          <div className="divSpan">
            <div className="divSpanBag">
              <CgShoppingBag />
            </div>
            <div>
              <ThemeSpan color="--gray-50">
                A vida é como um sanduíche, é preciso
              </ThemeSpan>
              <ThemeSpan color="--gray-50">
                recheá-la com os <strong>melhores</strong>
              </ThemeSpan>
              <ThemeSpan color="--gray-50">ingredientes</ThemeSpan>
            </div>
          </div>
        </section>
        <section className="sectionForm">
          <form onSubmit={handleSubmit(submit)}>
            <nav>
              <ThemeTitle>Login</ThemeTitle>
            </nav>
            <InputsForm
              id="email"
              type="email"
              placeholder="Digite seu email"
              label="E-mail"
              {...register("email")}
            />
            {errors.email && (
              <ThemeParagraphy color="--Negative">
                {errors.email.message}
              </ThemeParagraphy>
            )}
            <InputsForm
              id="password"
              type="password"
              placeholder="Digite sua senha"
              label="Senha"
              {...register("password")}
            />
            {errors.password && (
              <ThemeParagraphy color="--Negative">
                {errors.password.message}
              </ThemeParagraphy>
            )}
            <ThemeButton buttonSize="lg" buttonStyle="solid" type="submit">
              Logar
            </ThemeButton>
            <ThemeSpan color="--gray-50">
              Crie sua conta para saborear mutias delicias e matar sua fome!
            </ThemeSpan>
            <ThemeButton
              buttonSize="lg"
              buttonStyle="outline"
              onClick={() => navigate("/register")}
            >
              Cadastrar
            </ThemeButton>
          </form>
        </section>
      </StyledLoginPage>
    </Container>
  );
};

export default LoginPage;

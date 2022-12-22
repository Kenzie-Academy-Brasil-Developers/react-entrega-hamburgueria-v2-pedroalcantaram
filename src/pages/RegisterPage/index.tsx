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
import { Link } from "react-router-dom";
import { StyledRegisterPage } from "./style";
import { ThemeButton } from "../../styles/Buttons";
import { UserContext } from "../../context/UserContext";
import { registerSchema } from "./registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { CgShoppingBag } from "react-icons/cg";

interface iRegisterData {
  name: string;
  email: string;
  password: string;
  confirmed_password: string;
}

const RegisterPage = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterData>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const submit = (data: iRegisterData) => {
    userRegister(data);
    reset();
  };

  return (
    <Container>
      <StyledRegisterPage>
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
              <ThemeTitle>Cadastro</ThemeTitle>
              <Link to={"/login"}>Retornar para o login</Link>
            </nav>
            <InputsForm
              id="name"
              type="text"
              placeholder="Digite seu nome"
              label="Nome"
              {...register("name")}
            />
            {errors.name && (
              <ThemeParagraphy color="--Negative">
                {errors.name.message}
              </ThemeParagraphy>
            )}
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
            <InputsForm
              id="confirmed_password"
              type="password"
              placeholder="Digite novamente sua senha"
              label="Confirmar senha"
              {...register("confirmed_password")}
            />
            {errors.confirmed_password && (
              <ThemeParagraphy color="--Negative">
                {errors.confirmed_password.message}
              </ThemeParagraphy>
            )}
            <ThemeButton buttonSize="lg" buttonStyle="solid" type="submit">
              Cadastrar
            </ThemeButton>
          </form>
        </section>
      </StyledRegisterPage>
    </Container>
  );
};

export default RegisterPage;

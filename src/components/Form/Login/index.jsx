import { useNavigate } from "react-router-dom";
import { HeadLineBold, LabelTitle, TitleOne } from "../../../styles/typography";
import { DivCreate, FormLogin } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { BttPrimary } from "../../Button";
import { CompInput } from "../../Input/style";

export const CompFormLogin = ({ setLoginData }) => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/register");
  };
  const handleDashboard = () => {
    navigate("/dashboard");
  };

  const onSubmit = (data) => {
    setLoginData(data);
    setLoading(true);

    axios
      .post("https://kenziehub.herokuapp.com/sessions", { ...data })
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("authToken", res.data.token);
        toast.success("Sucesso! Redirecionando.");
        setTimeout(() => {
          setLoading(false);
          handleDashboard();
        }, 5000);
      })
      .catch((err) => {
        toast.error("Erro! Email ou senha inválidos");
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  };

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Email deve ser válido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  return (
    <FormLogin onSubmit={handleSubmit(onSubmit)}>
      <TitleOne color="--grey0">Login</TitleOne>
      <LabelTitle htmlFor="email" color="--grey0">
        Email
      </LabelTitle>
      <CompInput
        {...register("email")}
        id="email"
        placeholder="Digite seu email"
        onClick={() => setLoading(false)}
      ></CompInput>
      {errors.email?.message && <span>{errors.email.message}</span>}

      <LabelTitle htmlFor="password" color="--grey0">
        Senha
      </LabelTitle>
      <CompInput
        {...register("password")}
        id="password"
        type="password"
        placeholder="Digite sua senha"
        onClick={() => setLoading(false)}
      ></CompInput>
      {errors.password?.message && <span>{errors.password.message}</span>}
      <BttPrimary
        color="--color-primary"
        borderColor="--color-primary"
        fontColor="--white"
        colorBg="--color-primary-focus"
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        }}
      >
        {loading ? <FaSpinner className="spinner-icon" /> : "Entrar"}
      </BttPrimary>

      <DivCreate>
        <HeadLineBold color="--grey1">Ainda não possui uma conta?</HeadLineBold>
        <BttPrimary
          color="--grey1"
          colorBg="--grey2"
          borderColor="--grey1"
          fontColor="--grey0"
          onClick={() => handleHome()}
        >
          Cadastre-se
        </BttPrimary>
      </DivCreate>
    </FormLogin>
  );
};

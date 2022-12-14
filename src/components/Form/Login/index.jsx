import { HeadLineBold, LabelTitle, TitleOne } from "../../../styles/typography";
import { DivCreate, FormLogin } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { FaSpinner } from "react-icons/fa";
import { BttPrimary } from "../../Button";
import { CompInput } from "../../Input/style";
import { UserContext } from "../../../providers/UserContexts";

export const CompFormLogin = () => {
  const { onSubmit, setLoading, loading, handleHome } = useContext(UserContext);

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

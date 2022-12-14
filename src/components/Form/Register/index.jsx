import { DivHeadForm, FormRegister } from "./style";

import * as yup from "yup";
import { LabelTitle, SubTitle, TitleOne } from "../../../styles/typography";
import { BttPrimary } from "../../Button";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaSpinner } from "react-icons/fa";
import { CompInput } from "../../Input/style";
import { UserContext } from "../../../providers/UserContexts";

export const CompFormRegister = () => {
  const { onSubmitReg, setLoading, loading } = useContext(UserContext);

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(2, "Deve ter no mínimo 2 caracteres")
      .max(18, "Deve ter no máximo 18 caracteres"),
    email: yup.string().required("O email é obrigatório").email(),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(/(?=.*\d)/, "A senha deve conter ao menos um número")
      .matches(
        /(?=.*[a-z])/,
        "A senha deve conter ao menos uma letra minúscula"
      )
      .matches(
        /(?=.*[A-Z])/,
        "A senha deve conter ao menos uma letra maiúscula"
      )
      .matches(
        /(?=.*[$*&@#])/,
        "A senha deve conter ao menos um caractere especial"
      )
      .matches(/[-\w@#$%]{8,}/, "A senha deve conter ao menos 8 caracteres"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
    bio: yup
      .string()
      .required("Bio obrigatória")
      .min(10, "Deve ter no mínimo 10 caracteres")
      .max(150, "Deve ter no máximo 150 caracteres"),
    contact: yup
      .string()
      .required("Favor inserir rede social ou número de contato"),
    course_module: yup.string().required("Favor selecionar um módulo"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <>
      <FormRegister onSubmit={handleSubmit(onSubmitReg)}>
        <DivHeadForm>
          <TitleOne color="--grey0">Crie sua conta</TitleOne>
          <SubTitle color="--grey1">Rapido e grátis, vamos nessa</SubTitle>
        </DivHeadForm>
        <LabelTitle htmlFor="name" color="--grey0">
          Nome
        </LabelTitle>
        <CompInput
          {...register("name")}
          id="name"
          placeholder="Digite aqui seu nome"
          onClick={() => setLoading(false)}
        ></CompInput>
        {errors.name?.message && <span>{errors.name.message}</span>}

        <LabelTitle htmlFor="email" color="--grey0">
          Email
        </LabelTitle>
        <CompInput
          {...register("email")}
          id="email"
          placeholder="Digite aqui seu email"
          onClick={() => setLoading(false)}
        ></CompInput>
        {errors.email?.message && <span>{errors.email.message}</span>}

        <LabelTitle htmlFor="password" color="--grey0">
          Senha
        </LabelTitle>
        <CompInput
          {...register("password")}
          id="password"
          placeholder="Digite aqui sua senha"
          type="password"
          onClick={() => setLoading(false)}
        ></CompInput>
        {errors.password?.message && <span>{errors.password.message}</span>}

        <LabelTitle htmlFor="passwordConfirmation" color="--grey0">
          Confirmar senha
        </LabelTitle>
        <CompInput
          {...register("passwordConfirmation")}
          id="passwordConfirmation"
          type="password"
          placeholder="Confirme a senha"
          onClick={() => setLoading(false)}
        ></CompInput>
        {errors.passwordConfirmation?.message && (
          <span>{errors.passwordConfirmation.message}</span>
        )}

        <LabelTitle htmlFor="bio" color="--grey0">
          Bio
        </LabelTitle>
        <CompInput
          {...register("bio")}
          id="bio"
          placeholder="Fale sobre você"
          onClick={() => setLoading(false)}
        ></CompInput>
        {errors.bio?.message && <span>{errors.bio.message}</span>}

        <LabelTitle htmlFor="contact" color="--grey0">
          Contato
        </LabelTitle>
        <CompInput
          {...register("contact")}
          id="contact"
          placeholder="Opção de contato"
          onClick={() => setLoading(false)}
        ></CompInput>
        {errors.contact?.message && <span>{errors.contact.message}</span>}

        <LabelTitle htmlFor="course_module" color="--grey0">
          Selecionar módulo
        </LabelTitle>
        <select
          {...register("course_module")}
          id="course_module"
          onClick={() => setLoading(false)}
        >
          <option value="">Selecionar módulo</option>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)"
          </option>
        </select>
        {errors.course_module?.message && (
          <span>{errors.course_module.message}</span>
        )}
        <BttPrimary
          color="--color-primary"
          colorBg="--color-primary-focus"
          borderColor="--color-primary"
          fontColor="--white"
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 2000);
          }}
        >
          {loading ? <FaSpinner className="spinner-icon" /> : "Cadastrar"}
        </BttPrimary>
      </FormRegister>
    </>
  );
};

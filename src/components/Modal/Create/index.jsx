import React, { useContext } from "react";
import { TechContext, TechProvider } from "../../../providers/TechContext";
import { LabelTitle, TitleModal } from "../../../styles/typography";
import { BttPrimary } from "../../Button";
import { CompInput } from "../../Input/style";
import { FormModalCreate, Modal, ModalContent } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";

export const DivModal = () => {
  const { onSubmitCreate, setLoading, loading, setModal, display } =
    useContext(TechContext);

  const formSchema = yup.object().shape({
    title: yup
      .string()
      .required("Nome obrigatório")
      .min(2, "Deve ter no mínimo 2 caracteres")
      .max(18, "Deve ter no máximo 18 caracteres"),
    status: yup.string().required("Favor selecionar um módulo"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <TechProvider>
      <Modal display={display}>
        <ModalContent>
          <div className="div-head-modal">
            <TitleModal color="--grey0"> Cadastrar Tecnologia</TitleModal>
            <button onClick={() => setModal(false)}>X</button>
          </div>
          <FormModalCreate onSubmit={handleSubmit(onSubmitCreate)}>
            <LabelTitle htmlFor="title" color="--grey0">
              Nome
            </LabelTitle>
            <CompInput
              {...register("title")}
              id="title"
              placeholder="Digite o nome da tecnologia"
              onClick={() => setLoading(false)}
            ></CompInput>
            {errors.title?.message && <span>{errors.title.message}</span>}

            <LabelTitle htmlFor="status" color="--grey0">
              Selecionar status
            </LabelTitle>
            <select
              {...register("status")}
              id="status"
              onClick={() => setLoading(false)}
            >
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            {errors.status?.message && <span>{errors.status.message}</span>}
            <BttPrimary
              color="--color-primary"
              colorBg="--color-primary-focus"
              borderColor="--color-primary"
              fontColor="--white"
            >
              {loading ? (
                <FaSpinner className="spinner-icon" />
              ) : (
                "Cadastrar tecnologia"
              )}
            </BttPrimary>
          </FormModalCreate>
        </ModalContent>
      </Modal>
    </TechProvider>
  );
};

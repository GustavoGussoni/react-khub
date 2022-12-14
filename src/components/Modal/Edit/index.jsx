import React, { useContext } from "react";
import { TechContext, TechProvider } from "../../../providers/TechContext";
import { LabelTitle, TitleModal } from "../../../styles/typography";
import { BttDelete, BttPrimary } from "../../Button";
import { CompInput } from "../../Input/style";
import { FormModalEdit, Modal, ModalContent } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";

export const DivModalEdit = () => {
  const {
    onSubmitEdit,
    setLoading,
    loading,
    setModalEdit,
    display,
    delTech,
    infoModal,
    idEdit,
  } = useContext(TechContext);

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
            <TitleModal color="--grey0">Tecnologia Detalhes</TitleModal>
            <button onClick={() => setModalEdit(false)}>X</button>
          </div>

          <FormModalEdit onSubmit={(e) => e.preventDefault()}>
            <LabelTitle htmlFor="title" color="--grey0">
              Nome do projeto
            </LabelTitle>
            <CompInput
              {...register("title")}
              id="title"
              value={infoModal}
              placeholder="Digite o nome da tecnologia"
              onClick={() => setLoading(false)}
            ></CompInput>
            {errors.title?.message && <span>{errors.title.message}</span>}

            <LabelTitle htmlFor="status" color="--grey0">
              Status
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
            <div className="div-btts">
              <BttPrimary
                color="--color-primary"
                colorBg="--color-primary-focus"
                borderColor="--color-primary"
                fontColor="--white"
                type="submit"
                onClick={handleSubmit(onSubmitEdit)}
              >
                {loading ? (
                  <FaSpinner className="spinner-icon" />
                ) : (
                  "Salvar Alterações"
                )}
              </BttPrimary>
              <BttDelete
                color="--grey1"
                fontColor="--white"
                colorBg="--grey2"
                onClick={() => delTech(idEdit)}
              >
                Excluir
              </BttDelete>
            </div>
          </FormModalEdit>
        </ModalContent>
      </Modal>
    </TechProvider>
  );
};

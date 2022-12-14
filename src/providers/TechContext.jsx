import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContexts";

export const TechContext = createContext([]);

export const TechProvider = ({ children }) => {
  const localStorageToken = localStorage.getItem("authToken");
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const { techs, setTechs, getUser } = useContext(UserContext);
  const [infoModal, setInfoModal] = useState("");
  const [idEdit, setIdEdit] = useState("");

  const token = {
    headers: {
      Authorization: "Bearer " + localStorageToken,
    },
  };

  const onSubmitCreate = async (data) => {
    setLoading(true);

    try {
      const response = await api.post("/users/techs", data, token);

      toast.success("Tecnologia cadastrada com sucesso!");
      setTimeout(() => {
        setLoading(false);
        setModal(false);
        setTechs([...techs, response.data]);
      }, 2000);
    } catch (error) {
      toast.error("Usuário ja possui essa tecnologia cadastrada!");
      setLoading(false);
      setModal(false);
    }
  };

  const onSubmitEdit = async (data) => {
    try {
      const response = await api.put(`/users/techs/${idEdit}`, data, token);
      toast.success("Tech editado com sucesso!");
      getUser();
      setModalEdit(false);
      return response;
    } catch (error) {
      return error;
    }
  };

  const delTech = async (id) => {
    try {
      const response = await api.delete(`/users/techs/${id}`, token);

      toast.success("Tecnologia removida!");

      const newTech = techs.filter((tec) => tec.id !== id);
      setTechs(newTech);
      setModalEdit(false);
      return response;
    } catch (error) {
      return error;
    }
  };

  return (
    <TechContext.Provider
      value={{
        onSubmitCreate,
        setLoading,
        loading,
        modal,
        setModal,
        delTech,
        onSubmitEdit,
        modalEdit,
        setModalEdit,
        infoModal,
        setInfoModal,
        setIdEdit,
        idEdit,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

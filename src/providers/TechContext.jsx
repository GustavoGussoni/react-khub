import axios from "axios";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "./UserContexts";

export const TechContext = createContext([]);

export const TechProvider = ({ children }) => {
  const localStorageToken = localStorage.getItem("authToken");
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const { techs, setTechs, setUser } = useContext(UserContext);
  const [infoModal, setInfoModal] = useState("");
  const [idEdit, setIdEdit] = useState("");

  const token = {
    headers: {
      Authorization: "Bearer " + localStorageToken,
    },
  };

  const onSubmitCreate = (data) => {
    setLoading(true);
    axios
      .post("https://kenziehub.herokuapp.com/users/techs", { ...data }, token)
      .then((res) => {
        toast.success("Tecnologia cadastrada com sucesso!");
        setTimeout(() => {
          setLoading(false);
          setModal(false);
          setTechs([...techs, res.data]);
        }, 2000);
      })
      .catch((err) => {
        toast.error("Usuário ja possui essa tecnologia cadastrada!");
        setLoading(false);
        setModal(false);
      });
  };

  const delTech = (id) => {
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${id}`, token)
      .then((res) => {
        toast.success("Tecnologia removida!");
        const newTech = techs.filter((tec) => tec.id !== id);
        setTechs(newTech);
        setModalEdit(false);
      })
      .catch((err) => {
        return err;
      });
  };
  const GetUser = (data) => {
    axios
      .get("https://kenziehub.herokuapp.com/profile", data)
      .then((res) => {
        setUser(res.data);
        setTechs(res.data.techs);
      })
      .catch((err) => {
        return err;
      });
  };

  const onSubmitEdit = (data) => {
    axios
      .put(
        `https://kenziehub.herokuapp.com/users/techs/${idEdit}`,
        { ...data },
        token
      )
      .then((res) => {
        toast.success("Tech editado com sucesso!");
        GetUser(token);
        setModalEdit(false);
      })
      .catch((err) => {
        return err;
      });
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

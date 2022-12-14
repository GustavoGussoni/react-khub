import { useContext } from "react";

import { CompHeader } from "../../components/Header";
import {
  HeadLine,
  HeadLineBold,
  TitleCard,
  TitleOne,
  TitleThree,
} from "../../styles/typography";
import { DivContent, DivList, DivMain } from "./style";

import { UserContext } from "../../providers/UserContexts";
import { BttAdd } from "../../components/Button";
import { CardTech, DivCardTech } from "../../components/CardTech";
import { DivModal } from "../../components/Modal/Create";
import { TechContext } from "../../providers/TechContext";
import { DivModalEdit } from "../../components/Modal/Edit";

export const DashboardPage = () => {
  const {
    techs,
    user,
    handleLogin,
    onClick,
    localStorageToken,
    token,
    GetUser,
  } = useContext(UserContext);

  const {
    modal,
    setModal,
    modalEdit,
    setModalEdit,
    infoModal,
    setInfoModal,
    setIdEdit,
  } = useContext(TechContext);

  GetUser(token);
  const userData = user;

  if (localStorageToken) {
    return (
      <>
        <CompHeader text="Sair" onClick={onClick}></CompHeader>
        <DivMain>
          <TitleOne color="--grey0">
            {userData === null ? "Carregando nome" : `Olá, ${userData.name}`}
          </TitleOne>
          <HeadLineBold color="--grey1">
            {userData === null ? "Carregando dados" : userData.course_module}
          </HeadLineBold>
        </DivMain>
        <DivContent>
          <TitleThree color="--grey0">Tecnologias</TitleThree>
          <BttAdd
            onClick={() => setModal(true)}
            color="--grey3"
            colorBg="--grey2"
            fontColor="--white"
          >
            +
          </BttAdd>
        </DivContent>

        {modal === true ? <DivModal display="flex"></DivModal> : <></>}
        {modalEdit === true ? (
          <DivModalEdit infoInput={infoModal} display="flex"></DivModalEdit>
        ) : (
          <></>
        )}

        <DivList>
          {userData === null
            ? "Carregando dados"
            : techs.length > 0
            ? techs.map((el) => {
                return (
                  <CardTech
                    onClick={() => {
                      setModalEdit(true);
                      setInfoModal(el.title);
                      setIdEdit(el.id);
                    }}
                    key={el.id}
                  >
                    <TitleCard color="--white">{el.title}</TitleCard>
                    <DivCardTech>
                      <HeadLine color="--grey1">{el.status}</HeadLine>
                    </DivCardTech>
                  </CardTech>
                );
              })
            : "Usuário ainda não possui tecnologias cadastradas"}
        </DivList>
      </>
    );
  } else if (localStorageToken === null) {
    handleLogin();
  }
};

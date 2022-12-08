import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CompHeader } from "../../components/Header";
import { HeadLineBold, TitleOne, TitleThree } from "../../styles/typography";
import { DivMain, DivMessage } from "./style";
import { toast } from "react-toastify";
import { get } from "react-hook-form";

export const DashboardPage = ({ user, setUser }) => {
  const localStorageToken = localStorage.getItem("authToken");

  const token = {
    headers: {
      Authorization: "Bearer " + localStorageToken,
    },
  };

  const navigate = useNavigate();
  const HandleLogin = () => {
    useEffect(() => {
      navigate("/");
    }, []);
  };

  const onClick = () => {
    toast.success("Obrigado pela visita!", { autoClose: 3000 });
    setTimeout(() => {
      window.localStorage.clear();
      navigate("/");
    }, 3000);
  };

  const GetUser = (data) => {
    useEffect(() => {
      axios
        .get("https://kenziehub.herokuapp.com/profile", data)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  };
  GetUser(token);

  // const UserData = () => {
  //   useEffect(() => {
  //     console.log(user);
  //   }, []);
  // };
  // console.log(UserData());
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
        <DivMessage>
          <TitleOne color="--grey0">
            Que pena! Estamos em desenvolvimento
          </TitleOne>
          <TitleThree color="--white">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </TitleThree>
        </DivMessage>
      </>
    );
  } else if (localStorageToken === null) {
    HandleLogin();
  }
};

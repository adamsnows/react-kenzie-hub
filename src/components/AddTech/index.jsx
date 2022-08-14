import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import api from "../../services/Api";
import StyledPai from "../../styles/StyledAddCourse";

const AddCourse = ({ setAddTech }) => {
  const token = localStorage.getItem("token");
  const { register, handleSubmit } = useForm();

  const onSubmit = (tech) => {
    api
      .post(`/users/techs`, tech, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setAddTech(false);
        toast.success("Tech adicionada com sucesso!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        });
      })
      .catch((err) => {
        toast.error(`Você já tem esta tech!`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        });
      });
  };

  return (
    <StyledPai>
      <div className="addCourse">
        <header>
          <h2>Cadastrar Tecnologias</h2>
          <AiOutlineClose className="icon" onClick={(e) => setAddTech(false)} />
        </header>

        <form
          className="input-tech-container"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label>Nome</label>
          <input
            {...register("title", { required: true })}
            placeholder="Nome da tecnologia"
          />
          <label>Selecionar Status</label>
          <select {...register("status")}>
            <option value={"Iniciante"}>Iniciante</option>
            <option value={"Intermediário"}>Intermediário</option>
            <option value={"Avançado"}>Avançado</option>
          </select>
          <button>Cadastrar Tecnologia</button>
        </form>
      </div>
    </StyledPai>
  );
};

export default AddCourse;

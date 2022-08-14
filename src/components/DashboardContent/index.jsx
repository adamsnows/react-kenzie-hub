import KenzieHub from "../KenzieHub/index";
import { useNavigate } from "react-router-dom";
import User from "../User";
import EmptyTechs from "../EmptyTechs";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import Courses from "../Courses";
import { useEffect} from "react";
import api from "../../services/Api";

const DashboardContent = ({ setAddTech, addTech, setShowEdit, techs, setTechs, showEdit }) => {
  let navigate = useNavigate();
    
  const idUser = localStorage.getItem("id");  

  useEffect(() => {
    api.get(`/users/${idUser}`).then((res) => setTechs(res.data.techs));
  }, [addTech, showEdit]);  
  const signOut = () => {
    localStorage.clear();
    navigate("../login");
  };
  return (
    <>
      <div className="header-container">
        <KenzieHub />
        <button className="button-logout" onClick={() => signOut()}>
          Sair
        </button>
      </div>
      <User />
      {/* <Maintenance /> */}
      <div className="tecnologies">
        <h2>Tecnologias</h2>{" "}
        <AiOutlineAppstoreAdd
          className="add-icon"
          onClick={() => setAddTech(true)}
        />
      </div>
      {techs.length > 0 ? (
        <Courses
          setAddTech={setAddTech}
          addTech={addTech}
          techs={techs}
          setTechs={setTechs}
          setShowEdit={setShowEdit}
        />
      ) : (
        <EmptyTechs />
      )}
    </>
  );
};

export default DashboardContent;

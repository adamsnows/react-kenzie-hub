import { useState } from "react";
import AddCourse from "../../components/AddTech";
import Background from "../../components/Background";
import DashboardComponent from "../../components/DashboardComponent";
import EditTech from "../../components/EditTech";

const Dashboard = () => {
  const [addTech, setAddTech] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [techs, setTechs] = useState([]);

  return (
    <Background>
      <DashboardComponent
        setAddTech={setAddTech}
        addTech={addTech}
        setShowEdit={setShowEdit}
        techs={techs}
        setTechs={setTechs}
        showEdit={showEdit}
      />
      {addTech && <AddCourse setAddTech={setAddTech} addTech={addTech} />}
      {showEdit && (
        <EditTech
          onClose={() => setShowEdit(false)}
          id={showEdit}
          techs={techs}
        />
      )}
    </Background>
  );
};

export default Dashboard;

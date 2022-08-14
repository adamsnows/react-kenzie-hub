import React from "react";
import StyledDashboard from "../../styles/StyledDashboard";
import Background from "../Background";
import DashboardContent from "../DashboardContent/index";

const DashboardComponent = ({ setAddTech, addTech, setShowEdit, techs, setTechs, showEdit}) => {
  return (
    
      <StyledDashboard>
        <DashboardContent  showEdit={showEdit} setAddTech={setAddTech} addTech={addTech} setShowEdit={setShowEdit} techs={techs} setTechs={setTechs}/>
      </StyledDashboard>
    
  );
};

export default DashboardComponent;

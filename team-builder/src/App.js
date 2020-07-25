import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import TeamForm from './Form';


function App() {

  const [teamMembers, setTeamMembers] = useState([{
    name: 'Julio Gomez',
    email: 'julio-gomez@lambdastudents.com',
    role: 'Front-End Web Developer',
}]);


const newTeamMember = memberObjParam => {
    setTeamMembers([...teamMembers, {...memberObjParam }])

}




  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Member Portal</h1>
        <TeamForm newTeamMember ={newTeamMember} />
        <TeamMember teamMembers={teamMembers} />
      </header>
    </div>
  );
}

const TeamMember = props => {
  return (
    <div className="member-list">
      {props.teamMembers.map(member => (
        <div className="member" >
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
      </div>
      ))}
    </div>
  )
};
export default App;





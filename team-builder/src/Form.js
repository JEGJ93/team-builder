import React, { useState } from 'react';


const TeamForm = props => {
    const [theForm, setTheForm] = useState({
        name: 'Team Member',
        email: 'Email',
        role: 'Job Title'


    });

const handleChanges = event => {
    
    setTheForm({ ...theForm, [event.target.name]: event.target.value});
};

const submitForm = event => {
    event.preventDefault()
    props.newTeamMember(theForm)
    setTheForm({name: '', email: '', role: ''})
}

return (
    <form onSubmit={submitForm}> 
        <label htmlFor="name">
            Name
        <input id="name" type="name" placeholder="Enter Name" onChange={handleChanges} value={theForm.name} name="name" /> 
        </label>
        

        <label htmlFor="email">Email</label>
        <input id="email" placeholder="Enter Email" onChange={handleChanges} value={theForm.email} name="email" />
        
        <label htmlFor="role">
            Role
        <input id="role" type="role" placeholder="Enter Role" onChange={handleChanges} value={theForm.role} name="role" />
        </label>

        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
)   

};



export default TeamForm;





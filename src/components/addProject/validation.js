function validation({ name,description, projectManager,assignedTo,status,}){

   let error= {}

    if(name.length<3 || name==="") {error.name="Enter a real name"}
    if(description.length<3 || description==="") {error.description="Enter a real description"}
    if(projectManager==="") {error.projectManager="Enter project manager"}
    if(assignedTo==="") {error.assignedTo="Enter assigned person"}
    if(status==="") {error.status="Enter status"}
    
    return error
}
export default validation
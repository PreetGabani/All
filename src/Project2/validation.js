const validation = (values) => {
    let errors={};
    
    if(!values.name){
        errors.name = "**Field is Required**";
    }
    if(!values.city){
        errors.city = "**Field is Required**";
    }
    if(!values.address){
        errors.address = "**Field is Required**";
    }
    if(!values.date){
        errors.date = "**Field is Required**";
    }
    if(!values.status){
        errors.status = "**Field is Required**";
    }
        return errors;
}
export default validation;
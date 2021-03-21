class patientServicesClass{
    constructor(){}
    GetAll=()=>{
        return $.get('/API/patient/');
    }
    GetByID=(ID)=>{
        return $.get('/API/patient/ID/'+ ID)
    }
    Add=(NewPatient)=>{
        return $.post('/API/patient/add', NewPatient);
    }
    Update=(NewPatient)=>{
        return $.ajax({
            url :'/API/patient/Edit',
            dataType: 'json', 
            data: NewPatient,
            type : 'PUT',
        });
    }
    Delete=(ID)=>{
        return $.ajax({
            url :'/API/patient/Delete/ID/'+ ID,
            type : 'DELETE',
        });
    }
}
var patientSvc=new patientServicesClass();
var allPatient= require('./patientsData');
var patientsData = allPatient.getPatients();
exports.getAll=function(){
  return patientsData;
}
exports.get= function(ID){
  return allPatient.getPatients().find(item=> item.ID == ID);
}
exports.add = function(NewPatient){
  patientsData.push(NewPatient);
}
exports.update = function(Patientobj){
  for(var i=0;i<patientsData.length;i++){          
    if(patientsData[i].ID == Patientobj.ID){
      patientsData.splice(i,1,Patientobj);
      break;
    }
  }
}
exports.delete = function(ID){
  for(var i=0;i<patientsData.length;i++){
    if(patientsData[i].ID==ID){
      patientsData.splice(i,1);
      break;
    }
  }
}
    
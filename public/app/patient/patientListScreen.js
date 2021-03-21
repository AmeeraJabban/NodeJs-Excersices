(function PatientslistScreen(){
    patientSvc.GetAll().then(function(data){
    var patientsViewModel={
        patients:ko.observableArray(data),
        onAddbtnClick:(function(){
            patientEditScreen.open();
        }),
        onEditbtnClick : (function(currentpatient){
            patientEditScreen.open(currentpatient.ID);
        }),
    }
    ko.applyBindings(patientsViewModel,$('.PatientslistScreen')[0]);  
});

})();

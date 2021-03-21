$(document).ready(function() {
    if(document.readyState == 'complete'){
     
    RouterEngin.init([
    {
      name:'root',
      Url:'patientsystem',
      panel:'PatientslistScreen',
      //templateUrl:'api/app/patient/patientList.html',
     // component:'Patientslist',
    },
    {
      name:'Patients-list',
      Url:'Patients-list',
      panel:'PatientslistScreen',
     // templateUrl:'api/app/patient/patientList.html',
     // component:'Patientslist',
    },
    {
      name:'patients-editor',
      Url:'Patients-editor',
      panel:'PatientsEditScreen',
     // templateUrl:'api/app/patient/patientEdit.html',
     // component:'patientEditScreen',
    },
    {
      name:'users-list',
      Url:'Users-list',
      panel:'userlistScreen',
     // templateUrl:'api/app/user/userList.html',
     // component:'userListScreen',
    },
    {
      name:'users-editor',
      Url:'Users-editor',
      panel:'PatientslistScreen',
      //templateUrl:'api/app/user/userEdit.html',
      //component:'userEditScreen.init()',
    },
  ]);
  patientEditScreen.init();
  userListScreen.init();
  }});



 

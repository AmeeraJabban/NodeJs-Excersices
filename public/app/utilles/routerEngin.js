class RouterEnginClass{
  constructor(){
    this.states=[];
    this.caching=[];
  }
  init=(config)=>{
    this.states=config;
    this.checkUrl();
    $('.navigate').click(this.on_navigator_click);
    $(window).on('popstate', function(e){
      history.go(`${e.state}`);
    });
  }
  on_navigator_click=(e)=>{
    e.preventDefault();
    var statename=$(e.target).data('state');
    this.navigate(statename);
  }
  navigate=(statename)=>{
    var currentstate=this.getStateByName(statename);
    this.hideAll();
    this.show(statename);
    //this.displayUrl(currentstate.Url);

  }
  hideAll=()=>{
    $('.hided-section').hide();
  }
  show=(statename)=>{
    
    $('[data-state="'+ statename +'"]').show();
   // $(`[data-state=${currentstate.name}]`).show();
   /* var cache=this.getfromCache(currentstate);
    if( cache != null){
      $('.router-outlet').empty().append(cache.Data);

    }else{
      this.getfromAjax(currentstate).then(function(data){
        $('.router-outlet').empty().append(data);
          var result={
            state: currentstate.name,
            Data : data
        };
        RouterEngin.caching.push(result);
      });
    }  */
  //  this.displayUrl(currentstate.Url);
  }
 /* getfromCache=(currentstate)=>{
    return this.caching.find(item=> item.state == currentstate.name);
  }
  getfromAjax=(currentstate)=>{
    var deferred = $.Deferred();    
    $.ajax({
      type: 'GET',
      async: true,
      url : currentstate.templateUrl,
      success : function(data){
        deferred.resolve(data);
     }});
  return deferred;
  }*/
  checkUrl=()=>{
    var url=this.getCurrentUrl();
    var state=this.getstateByUrl(url);
    this.show(state);
  }
  displayUrl=(url)=>{
    history.pushState(`${url}`, null , `#${url}`);
  }
  getCurrentUrl=()=>{
    var currentUrl=location.href.split('/');
    return  `${currentUrl.reverse()[1]}`;
  }  
  getStateByName=(currentstatename)=>{
    return this.states.find(item=> item.name == currentstatename);
  }
  getstateByUrl=(url)=>{
    return this.states.find(item=> item.Url == url);
  }
}
var RouterEngin=new RouterEnginClass();

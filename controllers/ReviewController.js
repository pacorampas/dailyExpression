Daily.controller('ReviewCtrl', function ($scope, $http, dataService, headerService) {
  headerService.review();
  var levels = dataService.queryGetLevels();
  var notActives = JSON.parse(localStorage.notActives);
  var actives = JSON.parse(localStorage.actives);
  var today = JSON.parse(localStorage.todayExpression);
  
  //clonar levers, ya que vamos a modificarlo y sino podemos hacer un destrozo
  //causaba que luego se perdiera el daily, por ejemplo
  levels = JSON.parse( JSON.stringify(levels) );

  //poner solo las activas
  //mirar cual es el último nivel, de ese solo poner las expressiones activas, del resto poner todas
  //quitar la today expressión de hoy de esta lista
  var deleteNextLevels = false;
  for (i in levels) {
    if(levels[i].id == today.idLevel) {
      var expressions = levels[i].expressions;
      var pos = i;
      deleteNextLevels = true;
    }
    if(deleteNextLevels) break;
  }
  if(deleteNextLevels) levels.splice( parseInt(pos)+1, levels.length );

  //problema que nos encontramos aquí es que al quitar con splice cambiamos el index y todo se descoloca
  //luego falla el filtro porque intenta buscar una activa que no existe (al renderizar la vista)
  //por ello lo hemos solucionado comenzando por el final del array
  var count = levels[pos].expressions.length;
  for(var index = count-1; index >= 0; index--) {
  	if(!actives[expressions[index].id] || today.idExpression == expressions[index].id){
      levels[pos].expressions.splice(index);
    } 
  }

  $scope.levels = levels;
  $scope.searchByCorrect = 2;    
  
});
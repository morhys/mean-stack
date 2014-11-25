app.controller('projectsController', ['$scope', '$resource', function ($scope, $resource) {
  var Project = $resource('/api/projects');

  Project.query(function (results) {
    $scope.projects = results;
  });

  $scope.projects = []

  $scope.createProject = function () {
    var project = new Project();
    project.title = $scope.projectTitle;
    project.description = $scope.projectDescription;
    project.$save(function (result) {
      console.log()
      $scope.projects.push(result);
      $scope.projectTitle = '';
      $scope.projectDescription = '';
    });
  }


}]);
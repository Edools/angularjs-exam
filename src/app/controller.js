class GithubController {
    constructor($scope, $repositoryService) {
        $scope.find = () => {
            $repositoryService.search($scope.filter).success((result) => {
                $scope.repository = result.items;
                console.log($scope.repository)
            }).error((error) => {
                alert('Ocorreu um erro ao processar consulta: ' + (error? error.message: ' Desconhecido'));
            });
        }

        $scope.init = () => {
            $scope.filter = "java";
            $scope.find();
        }
    }
}

export default GithubController;

class GithubController {
    constructor($scope, $repositoryService) {
        $scope.find = () => {
            $repositoryService.search($scope.filter).success((result) => {
                $scope.repository = result.items;
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

import '../assets/styl/style.styl';

class GithubIssueController {
    constructor($scope, $issueService) {
        $scope.showIssues = () => {
            var url = $scope.repository.issues_url;
            $issueService.search(url.substring(0, url.indexOf('{/number}'))).success((data) => {
                $scope.issues = result;
            }).error((error) => {
                alert('Ocorreu um erro ao processar consulta: ' + (error? error.message: ' Desconhecido'));
            });
        }
    }
}

export default GithubIssueController;

class NgEnter {
    constructor($interval) {
        this.$interval = $interval;
    }

    link($scope, $element, $attr) {
        $element.bind('keydown keypress', (event) => {
            if(event.which === 13) {
                $scope.$apply(function (){
                    $scope.$eval($attrs.ngEnter);
                });
                $event.preventDefault();
            }
        });
    }
}

export default NgEnter;

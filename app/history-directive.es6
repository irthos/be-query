(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name query.directive:history
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="query">
       <file name="index.html">
        <history></history>
       </file>
     </example>
   *
   */
  angular
    .module('query')
    .directive('history', history);

  function history() {
    return {
      restrict: 'EA',
      templateUrl: '/history-directive.tpl.html',
      replace: false,
      controllerAs: 'history',
      controller() {
        let vm = this;
        vm.name = 'history';
      },
      link(scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());

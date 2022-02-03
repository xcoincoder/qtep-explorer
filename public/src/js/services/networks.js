'use strict';

angular.module('insight.networks')
	.factory('Networks',
		function(Constants, QtepCoreLib) {
			return {
				getCurrentNetwork: function () {
					return QtepCoreLib.Networks.get(Constants.NETWORK);
				}
			}
		});
/**
 * UberAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of TimeEstimateCollection
 *
 * @constructor
 */
angular.module('UberAPILib')
    .factory('TimeEstimateCollection', ['BaseModel', 'TimeEstimate',
        function (BaseModel, TimeEstimate) {
            var TimeEstimateCollection = function (obj) {
                if (!obj) {
                    this.times = null;
                } else {
                    this.times = obj.times.map(function (model) {
                        return new TimeEstimate(model);
                    });
                }
            }
    
            TimeEstimateCollection.prototype = new BaseModel();
            TimeEstimateCollection.prototype.constructor = TimeEstimateCollection;
        
            /**
             * List of time estimates
             *
             * @return {array}
             */
            TimeEstimateCollection.prototype.getTimes = function () {
                return this.times;
            };
        
            /**
             * Setter for Times
             * 
             * @param {array} value 
             */
            TimeEstimateCollection.prototype.setTimes = function (value) {
                this.times = value;
            };
        
            return TimeEstimateCollection;
        }
    ]);

}(angular));

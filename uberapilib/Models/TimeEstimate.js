/**
 * UberAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of TimeEstimate
 *
 * @constructor
 */
angular.module('UberAPILib')
    .factory('TimeEstimate', ['BaseModel',
        function (BaseModel) {
            var TimeEstimate = function (obj) {
                if (!obj) {
                    this.displayName = null;
                    this.estimate = null;
                    this.productId = null;
        
                    // Append to variable dictionary
                    this._variableDict['displayName'] = 'display_name';
                    this._variableDict['productId'] = 'product_id';
                } else {
                    this.displayName = obj.display_name;
                    this.estimate = obj.estimate;
                    this.productId = obj.product_id;
            
                    // Append to variable dictionary
                    this._variableDict['displayName'] = 'display_name';
                    this._variableDict['productId'] = 'product_id';
                }
            }
    
            TimeEstimate.prototype = new BaseModel();
            TimeEstimate.prototype.constructor = TimeEstimate;
        
            /**
             * Display name of product.
             *
             * @return {string}
             */
            TimeEstimate.prototype.getDisplayName = function () {
                return this.displayName;
            };
        
            /**
             * Setter for DisplayName
             * 
             * @param {string} value 
             */
            TimeEstimate.prototype.setDisplayName = function (value) {
                this.displayName = value;
            };
        
            /**
             * ETA for the product (in seconds). Always show estimate in minutes.
             *
             * @return {int}
             */
            TimeEstimate.prototype.getEstimate = function () {
                return this.estimate;
            };
        
            /**
             * Setter for Estimate
             * 
             * @param {int} value 
             */
            TimeEstimate.prototype.setEstimate = function (value) {
                this.estimate = value;
            };
        
            /**
             * Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles.
             *
             * @return {string}
             */
            TimeEstimate.prototype.getProductId = function () {
                return this.productId;
            };
        
            /**
             * Setter for ProductId
             * 
             * @param {string} value 
             */
            TimeEstimate.prototype.setProductId = function (value) {
                this.productId = value;
            };
        
            return TimeEstimate;
        }
    ]);

}(angular));
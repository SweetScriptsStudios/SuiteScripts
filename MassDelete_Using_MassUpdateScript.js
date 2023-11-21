/**
 * @NApiVersion 2.1
 * @NScriptType MassUpdateScript
 */
define(['N/record'],
    /**
     * This script defines a Mass Update Script that handles the deletion of records.
     * @param {record} record - NetSuite record module for record operations
     */
    (record) => {
        /**
         * Defines the Mass Update trigger point.
         * @param {Object} params - Parameters for the mass update operation
         * @param {string} params.type - Record type of the record being processed
         * @param {number} params.id - ID of the record being processed
         * @since 2016.1
         */
        const each = (params) => {
            try {
                // Log the parameters for debugging purposes
                log.debug("params ", JSON.stringify(params));

                // using record.delete API to DELETE
                var objRecordId = record.delete({
                    type: params.type,
                    id: params.id
                });

                // Log the ID of the deleted record
                log.debug("Deleted Record with Id ", objRecordId);
            } catch (error) {
                // Log any errors that occur during the deletion process
                log.debug(`Error in Deleting the record with Type : ${params.type} and Id : ${params.id}`, error.message);
            }
        }

        // Expose the 'each' function for use in mass update scripts
        return { each }
    });

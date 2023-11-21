/**
 /**
 * @NApiVersion 2.1
 * @NScriptType MassUpdateScript
 */
define(['N/record'],
    /**
 * @param{record} record
 */
    (record) => {
        /**
         * Defines the Mass Update trigger point.
         * @param {Object} params
         * @param {string} params.type - Record type of the record being processed
         * @param {number} params.id - ID of the record being processed
         * @since 2016.1
         */
        const each = (params) => {
            log.debug("params ", JSON.stringify(params)) 
			
            //Delete the record
            var objRecordId = record.load({
                type:params.type,
                id:params.id 
            })
           log.debug("Deleted Record with Id ",objRecordId);
          
        }

        return {each}

    });

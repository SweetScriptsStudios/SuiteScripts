require(["N/record"], function(record) {
	
  	 try {
                // Log the parameters for debugging purposes
                log.debug("params ", JSON.stringify(params));

                // Load the record to be deleted
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
	
})

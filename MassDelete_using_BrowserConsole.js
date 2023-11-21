require(["N/record"], function(record) {

    var arrayOfIds = [1, 2, 3]

    // Using forEach to loop through the array
    arrayOfIds.forEach((id) => {
        try {
            // using record.delete API to DELETE
            var objRecordId = record.delete({
                type: 'salesorder',
                id: id
            });
            // Log the ID of the deleted record
            console.log(`Deleted Record ID: ${objRecordId}`);
        } catch (error) {
            // Log any errors that occur during the deletion process
            console.error(`Error in Deleting the record with Type : ${params.type} and Id : ${params.id}`, error.message);
        }

    });

});

//get current index
//get transaction data for current index ONLY
//sum current transaction data ONLY

return data.get("Records.Record["+data.currentIndexIn("Records.Record")+"].transaction");
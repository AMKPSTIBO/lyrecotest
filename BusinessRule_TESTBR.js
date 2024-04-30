/*===== export metadata =====
{
  "contextId" : "GL",
  "workspaceId" : "Approved"
}
*/
/*===== business rule definition =====
{
  "id" : "TESTBR",
  "type" : "BusinessAction",
  "setupGroups" : [ "Business Rules" ],
  "name" : "TESTBR",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "PMDM.PRD.ExternalSourceRecord" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function () {
log.info("Hi");
}
module.exports = [{
    "name": "addEvent(int256,int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "futurePeriod", "type": "int256" }, { "name": "eventID", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "getAdjPrinComp(int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256[]" }]
},
{
    "name": "getCovarianceMatrixRow(int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256[]" }]
},
{
    "name": "getDeflated(int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256[]" }]
},
{
    "name": "getEvent(int256,int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "eventIndex", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "getEvents(int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256[]" }]
},
{
    "name": "getLatent(int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "getLoadingVector(int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256[]" }]
},
{
    "name": "getNewOne(int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256[]" }]
},
{
    "name": "getNewTwo(int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256[]" }]
},
{
    "name": "getNumberEvents(int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "getOutcomesFinal(int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256[]" }]
},
{
    "name": "getReport(int256,int256,int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "reporter", "type": "int256" }, { "name": "reportNum", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "getReportHash(int256,int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "reporter", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "getReporterBallot(int256,int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "reporterID", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256[]" }]
},
{
    "name": "getReportsFilled(int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256[]" }]
},
{
    "name": "getReportsMask(int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256[]" }]
},
{
    "name": "getScores(int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256[]" }]
},
{
    "name": "getSetOne(int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256[]" }]
},
{
    "name": "getSetTwo(int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256[]" }]
},
{
    "name": "getSmoothRep(int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256[]" }]
},
{
    "name": "getTotalRepReported(int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "getVSize(int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "getWeightedCenteredData(int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256[]" }]
},
{
    "name": "moveEventsToCurrentPeriod(int256,int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "currentVotePeriod", "type": "int256" }, { "name": "currentPeriod", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "returnOld(int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256[]" }]
},
{
    "name": "setAdjPrinComp(int256,int256,int256[])",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "adjPrinComp", "type": "int256[]" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "setCovarianceMatrixRow(int256,int256,int256[])",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "covarianceMatrixRow", "type": "int256[]" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "setDeflated(int256,int256,int256[])",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "deflated", "type": "int256[]" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "setLatent(int256,int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "latent", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "setLoadingVector(int256,int256,int256[])",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "loadingVector", "type": "int256[]" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "setNewOne(int256,int256,int256[])",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "newOne", "type": "int256[]" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "setNewTwo(int256,int256,int256[])",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "newTwo", "type": "int256[]" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "setOld(int256,int256,int256[])",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "setOld", "type": "int256[]" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "setOutcomesFinal(int256,int256,int256[])",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "outcomesFinal", "type": "int256[]" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "setReportHash(int256,int256,int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "reporter", "type": "int256" }, { "name": "reportHash", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "setReporterBallot(int256,int256,int256,int256[],int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "reporterID", "type": "int256" }, { "name": "report", "type": "int256[]" }, { "name": "reputation", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "setReportsFilled(int256,int256,int256[])",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "reportsFilled", "type": "int256[]" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "setReportsMask(int256,int256,int256[])",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "reportsMask", "type": "int256[]" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "setScores(int256,int256,int256[])",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "scores", "type": "int256[]" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "setSetOne(int256,int256,int256[])",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "setOne", "type": "int256[]" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "setSetTwo(int256,int256,int256[])",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "setTwo", "type": "int256[]" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "setSmoothRep(int256,int256,int256[])",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "smoothRep", "type": "int256[]" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "setTotalRepReported(int256,int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "repReported", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "setVSize(int256,int256,int256)",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "vSize", "type": "int256" }],
    "outputs": [{ "name": "out", "type": "int256" }]
},
{
    "name": "setWeightedCenteredData(int256,int256,int256[])",
    "type": "function",
    "inputs": [{ "name": "branch", "type": "int256" }, { "name": "expDateIndex", "type": "int256" }, { "name": "weightedCenteredData", "type": "int256[]" }],
    "outputs": [{ "name": "out", "type": "int256" }]
}];
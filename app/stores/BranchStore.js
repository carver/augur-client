var Fluxxor = require('fluxxor');
var constants = require('../libs/constants');

var state = {
  branches: {},
  currentBranch: 1010101,
  currentVotePeriod: null
};

var BranchStore = Fluxxor.createStore({
  
  initialize: function () {
    this.bindActions(
      constants.branch.LOAD_BRANCHES_SUCCESS, this.handleLoadBranchesSuccess,
      constants.branch.UPDATE_CURRENT_BRANCH, this.handleUpdateCurrentBranch
    );
  },

  getState: function () {
    return state;
  },

  handleLoadBranchesSuccess: function (payload) {
    state.branches = payload.branches;
    this.emit(constants.CHANGE_EVENT);
  },

  handleUpdateCurrentBranch: function (payload) {
    state.currentBranch = payload.currentBranch;
    state.currentVotePeriod = payload.currentVotePeriod;
    this.emit(constants.CHANGE_EVENT);
  }
});

module.exports = BranchStore;

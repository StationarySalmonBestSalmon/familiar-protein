var ServerActions = require('../actions/ServerActions');


var ApiUtils = {
  loadAllQuestions: $.ajax({
    url: window.location.origin + '/questions',
    method: 'GET',
    dataType: 'json',
    success: function(data){
      data.sort(function(a, b){
        return a.qNumber - b.qNumber;
      });
      ServerActions.questionsLoaded(data);
      //this.setState({questions: data});
    }.bind(this),
    error: function(xhr, status, err){
      console.error(xhr, status, err.message);
    }
  });
};

module.exports = ApiUtils;
// {% if domain %}
// var APP_URL = '{{ domain }}';
// var API_URL = '{{ domain }}';
// {% else %}
// var APP_URL = '{{ protocol }}://{{ path }}.{{ host }}';
// var API_URL = '{{ protocol }}://api.{{ host }}';
// {% endif %}

var url = window.location.href;
var arr = url.split("/");
var APP_URL = API_URL = arr[0] + "//" + arr[2];

// Parse query string
var query = {};
location.search.substr(1).split("&").forEach(function(item) {
  query[item.split("=")[0]] = item.split("=")[1] && decodeURIComponent(item.split("=")[1]);
});

var appUrl = query.appUrl || APP_URL;
var apiUrl = query.apiUrl || API_URL;

angular.module('formioApp').constant('AppConfig', {
  appUrl: appUrl,
  apiUrl: apiUrl,
  forms: {
    userForm: appUrl + '/user',
    userLoginForm: appUrl + '/user/login'
  }
});

# userStory

Udemy - Start at Finished: only need the install and check

##Installments Needed

npm socket.io --save

##Problems


##Fixed
#####1)
Problem in authService.js old code is still there and needs to be compared. Application is working now. Fixed on line 45: The problem is it was getItem and needed to be setItem

#####2)
Problem started in Udemy Class Section 3:25. The Angular script tag https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.3/angular-route.min.js
seems to be the problem. However I did find a typo in mainCtrl with vm.loggedIn (was vm.loggerIn).
Error message:

  Uncaught SyntaxError: Unexpected token =

  angular.js:38 Uncaught Error: [$injector:modulerr] http://errors.angularjs.org/1.5.3/$injector/modulerr?p0=MyApp&p1=Error%3A%2…ogleapis.com%2Fajax%2Flibs%2Fangularjs%2F1.5.3%2Fangular.min.js%3A20%3A463)

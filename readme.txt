To run the code start webserver and goto http://localhost/pplsearch/views

For test automation, you need to have the following packages installed:

1.node.js (download and install https://nodejs.org/en/download/)
2.webdriver-manager - npm update webdriver-manager if webdriver manager not already iinstalled,
install using npm install webdriver-manager -g
3.protractor - npm install  protactor -g


To run test cases:-
Go to the project root directory in command prompt, start selenium web 
driver with the following command:- 

webdriver-manager start

Open another command prompt and run test cases with the following commands
protactor pplsearch/src/tests/conf.js - this will run UI and js test cases
by launching application in browser

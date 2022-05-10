//example 1
(function aDemoFunc() {
    console.log('Hello World!');
 })();
 
 ////example 2
 var sum = (function() {
    return 10 + 20; 
 })();
 
 console.log(sum);
 
 ////example 3
 var controller = (function() {
    var a = {
            name: 'Zonayed Ahmed',
            uid: 1062
            };
    return a;
 })();
 console.log(controller);
 
 var interface = (function() {
    return 'Hello ' + controller.name;   
 })();
 console.log(interface);
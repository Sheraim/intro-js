'use strict'

var name = prompt('What is your name?');

var date = prompt('Hey ' + name + '! What year were you born?');

if (date < 2002) {
    alert('Excellent, we look forward to working with you,' + name + '! Please click OK below for next steps.');
} else if (date >= 2002) {
    alert('Hey ' + name + ', as you are under the age of 18, unfortunately we will not be able to take your order online.  Please visit one of our boutique locations with a parent or guardian and we would be more than happy to process your order in person.  If you have any questions please do not hesitate to contact our director of opertions, Ann-Marie, at annmarie@constructive.com or (345) 938 1234, and she will be happy to assist.');
}

document.write('<h3>' + greeting + '</h3>');


var elDays = document.getElementById('days');
var elList = document.querySelector('ul');
var elH1 = document.getElementById('monthName');

function createCalendar(days, choice){
    elList.innerHTML = '';
    elH1.textContent = choice;
    for(var i = 0; i <= days; i++) {
    var elListItem = document.createElement('li');
    elListItem.textContent = i;
    elList.appendChild(elListItem);
    }
}

createCalendar(31, 'January');

   


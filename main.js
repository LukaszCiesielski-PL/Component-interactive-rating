function submitFeedback() {
    document.getElementById('cardFirst').style.display = 'none';
    document.getElementById('cardSecond').style.display = 'flex';
}

function changeCard(value) {
    switch(value) {
        case 'btn1': document.getElementById('rate').innerHTML = "1" ; break ;
        case 'btn2': document.getElementById('rate').innerHTML = "2" ; break ;
        case 'btn3': document.getElementById('rate').innerHTML = "3" ; break ;
        case 'btn4': document.getElementById('rate').innerHTML = "4" ; break ;
        case 'btn5': document.getElementById('rate').innerHTML = "5" ; break ;
    }
}
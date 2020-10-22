function clickMe(){
    var kurs = 76.93;
    var dollar = document.querySelector('#text').value;
    dollar = dollar.replace (',', '.');
    var result = dollar * kurs;
    

    if ( !isNaN (dollar) ) {
        alert (dollar + 'долларов = ' + result + 'рублей');

    }
    else {
        alert('Введите число');
    }
}
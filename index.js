
//Element creator function

function create_element(tagName, attrtiname, attriValue) {

    let label = document.createElement(tagName);

    label.setAttribute(attrtiname, attriValue);

    return label;

}

//create body


let container = (create_element('div', 'class', 'container'));

let row = (create_element('div', 'class', 'row'));

let box_inside = (create_element('div', 'class', 'col d-flex  main justify-content-center'));


//Create Date time picker

let input = document.createElement('input');

input.setAttribute('type', 'date');

input.setAttribute('id', 'DOB');

input.setAttribute("class", 'input-group date');

let row1 = create_element('div', 'class', 'row')

let h4 = create_element('h4', 'class', 'col-12 d-flex justify-content-center')

h4.innerText = "Your DOB time difference since birth date to today"




//button

let button = create_element('button', 'class', 'btn btn-primary');

button.innerText = 'Display Data';

button.addEventListener('click', displayData);


//create container

let h51 = create_element('div', 'class', 'col-12 d-flex justify-content-center');

let h52 = create_element('div', 'class', 'col-12 d-flex justify-content-center');

let h53 = create_element('div', 'class', 'col-12 d-flex justify-content-center');

let h54 = create_element('div', 'class', 'col-12 d-flex justify-content-center');

let h55 = create_element('div', 'class', 'col-12 d-flex justify-content-center');

let h56 = create_element('div', 'class', 'col-12 d-flex justify-content-center');

let h57 = create_element('div', 'class', 'col-12 d-flex justify-content-center');



//function display data

function displayData() {
    
    let input_value = input.value;

    let birth_date = new Date(input_value);
    
    let current_date = new Date();

    let milliseconds = parseInt(current_date.getTime()) - parseInt(birth_date.getTime());

    h57.innerText =(`Milliseconds : ${milliseconds}`);

    let seconds = Math.floor(milliseconds/1000);

    h56.innerText =(`seconds :  ${seconds}`);

    let minutes = Math.floor(seconds/60);

    h55.innerText =(`Minutes : ${minutes}`);

    let hours = Math.floor(minutes/60);

    h54.innerText =(`Hours : ${hours}`);

    let  Day =Math.floor(hours/24);

    h53.innerText =(`Days : ${Day}`);

    let year = ((current_date.getFullYear() - birth_date.getFullYear()));

    h51.innerText = (`year : ${year}`);

    let month = (year*12+(current_date.getMonth() - birth_date.getMonth()));

    h52.innerText =(`Month : ${month}`)


}


//append body

document.body.append(container);

container.append(row);

container.append(row1)

row.append(box_inside);

//append content

box_inside.append(input);

box_inside.append(button);

//append container

row1.append(h4)

row1.append(h51);

row1.append(h52);

row1.append(h53);

row1.append(h54);

row1.append(h55);

row1.append(h56);

row1.append(h57);






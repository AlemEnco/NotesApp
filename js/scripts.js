
console.log("Hola")
let arreglo = [];
function registerNote(){
    let contenedorNotas = document.getElementById("contenedorNotas")
    let note = document.getElementById('noteDescription').value;
    arreglo.push(note)

    let cuerpoToday = document.createElement('div')
    cuerpoToday.setAttribute('class', 'cuerpotoday')
    cuerpoToday.setAttribute('id','cuerpotoday' + (arreglo.indexOf(note) + 1).toString())

    let divInput = document.createElement('div')
    divInput.setAttribute('class', 'check')

    let divButtons = document.createElement('div')
    divButtons.setAttribute('class', 'check')

    let input = document.createElement('input')
    input.setAttribute('id','completeCheck' + (arreglo.indexOf(note) + 1).toString())
    input.setAttribute('type', 'checkbox')
    input.setAttribute('onclick','completeNote(' + (arreglo.indexOf(note) + 1).toString() + ')')

    let p = document.createElement('p')
    p.innerHTML = note.toString()

    let button = document.createElement('button')
    button.setAttribute('id', 'ApprovedBtn' + (arreglo.indexOf(note) + 1).toString())
    button.setAttribute('class', 'ApprovedBtn')
    button.textContent = 'Incomplete'

    let trash = document.createElement('button')
    trash.setAttribute('type','button')
    trash.setAttribute('id','deleteNote')
    trash.setAttribute('onclick','deleteNote(' + (arreglo.indexOf(note) + 1).toString() + ')')
    trash.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">' + 
                        '<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>' +
                        '<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>' +
                    '</svg>'

    divInput.appendChild(input)
    divInput.appendChild(p)

    divButtons.appendChild(button)
    divButtons.appendChild(trash)

    cuerpoToday.appendChild(divInput)
    cuerpoToday.appendChild(divButtons)

    contenedorNotas.appendChild(cuerpoToday)

    document.getElementById('noteDescription').value = ''
}

function deleteNote(index){
    console.log('eliminar nota')
    document.getElementById('cuerpotoday' + index).remove();
}

function completeNote(index){
    debugger;
    let check = document.getElementById('completeCheck' + index);
    if(check.checked){
        document.getElementById('ApprovedBtn' + index).textContent = ''
        document.getElementById('ApprovedBtn' + index).textContent = 'Complete'
        document.getElementById('ApprovedBtn' + index).style = 'background: rgb(176, 236, 212); color: rgb(25, 146, 97);'
    }
    else{
        document.getElementById('ApprovedBtn' + index).textContent = ''
        document.getElementById('ApprovedBtn' + index).textContent = 'Incomplete'
        document.getElementById('ApprovedBtn' + index).style = 'background: rgb(255 156 154 / 59%); color: red;'
    }
}
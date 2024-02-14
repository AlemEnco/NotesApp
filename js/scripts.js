
console.log("Hola")

function registerNote(){
    let cuerpoToday = document.getElementById("cuerpotoday");
    let note = document.getElementById('noteDescription').value;
    console.log(note)

    console.log(cuerpoToday)

    cuerpoToday.appendChild('<div class="check"><input type="checkbox">'+ note +'</div><button id="ApprovedBtn">Approved</button>')
}
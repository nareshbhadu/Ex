"use strict"
const h3 = document.querySelector(".h3")
h3.addEventListener('click',() => addnote())

const notes = JSON.parse(localStorage.getItem("notes"))
if(notes){
    notes.forEach((notetxt) => addnote(notetxt))
}

function addnote(text = ''){
    const note = document.createElement('div');
    note.classList.add("all");
    note.innerHTML = `   <div class="but">
            <input type="button" class="edt" value="Edit">
            <input type="button" class="dlt" value="Delete">            
        </div>
        <textarea id="txt" rows="5" readonly>${text}</textarea>`

    const dlt = note.querySelector(".dlt")
    dlt.addEventListener("click",() =>{
        note.remove()
        update()
    })

    const edt = note.querySelector(".edt")
    edt.addEventListener("click",() => {
        const txt = note.querySelector("textarea")
        const fla = txt.hasAttribute('readonly')

        if(fla){
            txt.removeAttribute('readonly')
            edt.value = "Save"
        }
        else{
            txt.setAttribute('readonly','readonly')
            edt.value = "Edit"
        }
    })

    const textareael = note.querySelector("textarea")
    textareael.addEventListener("input", (e) => {
        const value = e.target;
        update();
    })

    document.body.appendChild(note);
}

function update(){
    const notetext = document.querySelectorAll("textarea")
    const notes = []

    notetext.forEach((note) => notes.push(note.value))
    localStorage.setItem("notes", JSON.stringify(notes))
}
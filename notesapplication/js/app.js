// UI
const addbtn=document.getElementById('add');

// Event Listener
addbtn.addEventListener('click',()=>addnote());

function addnote(text=""){
    // console.log('hay');
    const note=document.createElement('div');
    note.classList.add('note');

    note.innerHTML=`
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main ${text ? '' : 'hidden'}"></div>
        <textarea class="${text ? 'hidden' : ''}"></textarea>
        `;

    // console.log(note);

    const editbtn=note.querySelector('.edit');
    const delbtn=note.querySelector('.delete')
    const main=note.querySelector('.main');
    const txtarea=note.querySelector('textarea');

    editbtn.addEventListener('click',()=>{
        main.classList.toggle("hidden");
        txtarea.classList.toggle('hidden');
    });
    delbtn.addEventListener('click',()=>{
        note.remove();
        updadelocalstorage();
    })

    txtarea.value=text;
    main.innerText=text;

    txtarea.addEventListener('keyup',(e)=>{
        // console.log(e.target.value);

        const {value}=e.target;
        // console.log(value);
        main.innerText=value;
        updadelocalstorage();

    })

    document.body.appendChild(note);
}

function updadelocalstorage(){
    const notetexts=document.querySelectorAll('textarea');

    let notes=[];

    notetexts.forEach(notetext=>notes.push(notetext.value));
    // console.log(notes);

    localStorage.setItem("notes",JSON.stringify(notes));
}

const getnotes=JSON.parse(localStorage.getItem("notes"));
// console.log(getnotes);
// console.log(typeof getnotes);

if(getnotes){
    getnotes.forEach(getnote=>addnote(getnote));
}

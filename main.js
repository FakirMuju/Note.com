let addbtn = document.getElementById('addbtn');
let addtxt = document.querySelector('#addtxt');
// to add note
addbtn.addEventListener('click', (
  e) => {
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    noteobj = [];
  }
  else {
    noteobj = JSON.parse(notes);
  }
  noteobj.push(addtxt.value);
  localStorage.setItem('notes', JSON.stringify(noteobj));
  addtxt.value = '';
  console.log(noteobj);
  show()
});
// to show note
function show() {
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    noteobj = [];
  }
  else {
    noteobj = JSON.parse(notes);
  }
  let html = '';
  noteobj.forEach((el, i) => {
    html += `
      
      <div class="card-body">
        <h5 class="card-title">Your Notes ${i+1}</h5>
        <div class="mb-3">
        <p class='card-text'>${el}</p>
          <button id='del' onclick='deletenote(this.id)' class=" my-3 btn btn-primary">Delete</button>

        </div>
      </div>
    
    
    `
  })
  let noteEl = document.getElementById('n');
  if (noteobj != 0) {
    noteEl.innerHTML = html;

  }
  else {
    noteEl.innerHTML = `Nothing To See Here Click ' Add Note' Button`;
  }
}
// to delete note
function deletenote(index) {
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    noteobj = [];
  }
  else {
    noteobj = JSON.parse(notes);
  }
  noteobj.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(noteobj));

  show();
}

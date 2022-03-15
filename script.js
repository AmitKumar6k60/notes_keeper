console.log("Made by Amit Kumar");
// reset button
const refresh = document.forms['formbox'];
refresh.addEventListener('click',function(e){
    if(e.target.className == 'resetbtn' || e.target.className == 'fa-solid fa-arrow-rotate-right' )
    {
        refresh.querySelector('input[type="text"]').value = '';   
        refresh.querySelector('textarea[type="text"]').value = '';
    }
})

// add notes

const addtitle = document.forms['formbox'];
addtitle.addEventListener('submit',function(e){
    e.preventDefault();
    const titlevalue = addtitle.querySelector('input[type="text"]').value;
    addtitle.querySelector('input[type="text"]').value = '';
    const notevalue = addtitle.querySelector('textarea[type="text"]').value;
    addtitle.querySelector('textarea[type="text"]').value = '';

    // Create Element
    
    const boxdiv = document.createElement('div');
    const p1p = document.createElement('p');
    const hrline = document.createElement('hr');
    const p2p = document.createElement('p');
    const del = document.createElement('button');
    const delimg = document.createElement('i');
    
    // Append to DOM
    
        del.appendChild(delimg);
        boxdiv.appendChild(p1p);
        boxdiv.appendChild(hrline);
        boxdiv.appendChild(p2p);
        boxdiv.appendChild(del);

    const bigboxdiv = document.querySelector('.bigbox');
         
        bigboxdiv.appendChild(boxdiv);
    
    // add content
    
        p1p.textContent = titlevalue;
        p2p.textContent = notevalue;
    
    // add classes for styling
    
        boxdiv.classList.add('box');
        p1p.classList.add('p1');
        p2p.classList.add('p2');
        del.classList.add('trashbtn');
        delimg.classList.add('fa-solid');
        delimg.classList.add('fa-trash-can');


});    




// delete the note

const bigb = document.querySelector('.bigbox');

bigb.addEventListener('click', function(e){
    if(e.target.className == 'fa-solid fa-trash-can')
    {
        const bx = e.target.parentElement.parentNode;
        bigb.removeChild(bx);
    }
    if(e.target.className == 'trashbtn')
    {
        const bx = e.target.parentNode;
        bigb.removeChild(bx);
    }
});
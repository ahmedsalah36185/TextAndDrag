let btn =window.document.getElementById('btn_sav');
let inp = window.document.getElementById('txtinput');
// get all el classes 
let Blocks = document.querySelectorAll('.BLO');
let D_btn = document.querySelectorAll('.del_btn');


let get_drg = null;

// add anew TXt
btn.onclick = function () { 
    if (inp.value != "") { 
        Blocks[0].innerHTML += `<div class="TXT"><p class="p_txt" draggable="true">${inp.value}</p><button class="btn del_btn">DEL</button></div>`;
        inp.value =''
    }
    dragTXT();
}
// TXT drag function

function dragTXT() {
    let TXT = document.querySelectorAll('.TXT');
    let del_btn = document.querySelectorAll('.del_btn');
    TXT.forEach(text => { 
        text.addEventListener('dragstart', function(){ 
            get_drg = text;
            text.style.opacity = '1.5';

        })  
        text.addEventListener('dragend', function () {
            get_drg = null;
            text.style.opacity = '5';
        })
        Blocks.forEach(block => {
            block.addEventListener('dragover', function (e) {
                e.preventDefault();
                this.style.background = '';
                this.style.color = 'black';
            });
            block.addEventListener('dragleave', function () {
                this.style.background ='';
                this.style.color = 'black';
            });
            block.addEventListener('drop', function () {
                this.append(get_drg);
                this.style.background = '';
                this.style.color = 'black';
            
            });
        })
        // delet btn func
        del_btn.forEach(del =>{
            del.addEventListener('click',function(){
                del.parentElement.textContent = " ";
            })
        })
    })
}
// delete the index


/////////////////////////////////////


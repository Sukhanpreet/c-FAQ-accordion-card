console.log("script working")

const accordion=document.querySelectorAll('.content')

for(let i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click',callme)
}

function callme(){
    if(this.classList.contains('active')){
        this.classList.remove('active');
    }
    else{
        for(let j=0;j<accordion.length;j++){
            accordion[j].classList.remove('active'
            );
        }
        this.classList.add('active');
    }   
}
"use strict"


function split4(){
    //splits a dit into 4 by adding 4 quarters
    addQuarter(this)
    addQuarter(this)
    addQuarter(this)
    addQuarter(this)

    //Challenge - Set the background colour of each div generated to a random colour
    
    ///rgb() function
    //Math.random



}


function addQuarter(intoDiv){
    
    
    
    let q = document.createElement("div") //create a 'div' element - and hold a 'pointer' to it in the variable 'q'



    q.style.backgroundColor=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`

    q.style.backgroundColor = "red"
    //add the two classes 'quarter' and 'flexy' to this new element
    q.classList.add("flexy")
    q.classList.add("quarter")

    q.addEventListener("click",split4)
    
    intoDiv.appendChild(q)

}

document.body.addEventListener("click",split4)


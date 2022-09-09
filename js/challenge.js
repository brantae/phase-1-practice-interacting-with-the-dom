
//declared variables



let counter = document.querySelector('#counter')
console.log(counter)

let myInterval = setInterval(startCounter, 1000)


const btn = document.querySelectorAll("button")
console.log(btn)

const likes = document.querySelector(".likes")
console.log(likes)

const li = document.createElement('li')


const p = document.createElement('p')
console.log(p)

let pause = false

//why?*************************
const obj = {}

//Begin code
function startCounter() {
    counter.innerHTML++  

}


document.addEventListener('DOMContentLoaded', () => {

    console.log("DOM CONTENT LOADED")

//Invoke the functions
    plusAndMinus()
    startCounter()
    pauseCounter()
    formSubmit()
    
    
    
    btn[2].addEventListener('click', addLike)
    btn[3].addEventListener('click', pauseToggle)

    

})

//Counter automatically run every 1 second


function pauseCounter() {
    btn[3].addEventListener('click', () => {
        clearInterval(myInterval)

    })
}

function pauseToggle() {
    pause = !pause //?????

    if(pause) {
        clearInterval(myInterval)
        btn[3].innerText = 'resume'
    } else {
        myInterval = setInterval(startCounter, 1000)
        btn[3].innerText = 'pause'
    }

}



//Buttons under the counter
function plusAndMinus() {

    //minus
    btn[0].addEventListener('click', () => counter.innerHTML--)
    //plus
    btn[1].addEventListener('click', () => counter.innerHTML++)
}


    //like function
    
    // ***********************
function addLike() {
     let second = counter.innerText
     console.log(second)

     obj[second] = obj[second] || 0
     obj[second] += 1
     likesList()
    }

function likesList() {
    likes.innerHTML = ""
    for (let key in obj){
        li.innerText = `${key} has been liked ${obj[key]} times`
        likes.append(li)
        
        }
    }
    

    function formSubmit() {

        //create comments section with div id 'list' and class comments. append ps for the submittals


       document.querySelector('#comment-form').addEventListener('submit', handleForm)
    }

    function handleForm(e) {
        e.preventDefault()
       const comments = document.querySelector('#list')
       const comment = e.target.querySelector("input").value

        
        li.innerText = comment
        comments.append(li)
        e.target.reset()
     
    }




        
    
    



    

        
    

   
    
        
  

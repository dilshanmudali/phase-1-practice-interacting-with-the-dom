const timer = document.querySelector('#counter')
const btnContainer = document.querySelector('#btn-container')
const ul = document.querySelector('ul')
const form = document.querySelector('#comment-form')
const commentSection = document.querySelector('#list')

let counter = 0
let counting = true


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let p = document.createElement('p')
    let input = document.querySelector('#comment-input')
    p.textContent = input.value
   
    commentSection.append(p)
    e.target.reset()
})

btnContainer.addEventListener('click', e => {
    if(e.target.id === 'plus'){
        defaultCounterFunction(+1)
    }
    else if(e.target.id === 'minus'){
       defaultCounterFunction(-1)
    }
    else if(e.target.id === 'pause'){
        pausedAction()
    }
    else if(e.target.id === 'heart'){
        updateLikes()
    }
})

function defaultCounterFunction(number){
    counter = counter + number 
    timer.textContent = counter 
}

function pausedAction(){
    counting = !counting 
    document.querySelectorAll('button').forEach(button => {
        if(button.id !== 'pause'){
            button.disabled = !counting 
        }
        else{
            if(counting){
                button.textContent = 'pause'
            }else{
                button.textContent = 'resume'
            }
        }
    })
}

// let likeHashMap = {}

// function updateLikes(){
//     if(likeHashMap[counter]){
//     }else{
//         likeHashMap[counter] = 1
//         const li = document.createElement('li')
//         li.textContent = `the number ${counter} has been liked x times `
//         ul.append(li)
//     }
// }

setInterval(()=>{
    if(counting){
        defaultCounterFunction(1)
    }
},1000)

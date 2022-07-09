let days = document.querySelector('#days')
let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')

let timer = setInterval(() => {
    seconds.innerHTML--
    
    if(seconds.innerHTML == -1) {
        seconds.innerHTML = 59

        minutes.innerHTML--

        if(minutes.innerHTML == -1) {
            minutes.innerHTML = 59

            hours.innerHTML-- 

            if(hours.innerHTML == -1) {
                hours.innerHTML = 23

                days.innerHTML-- 

                if(days.innerHTML == -1) {
                    clearInterval(timer)

                    days.innerHTML = 0
                    hours.innerHTML = 0
                    minutes.innerHTML = 0
                    seconds.innerHTML = 0
                    alert('Ты не успел')
                }

            }

        }

    }
    

}, 1000);

let btn = document.querySelector('.btn_white')
let modal = document.querySelector('.modal_bg')
let btnBot = document.querySelector('.modal__close')

btn.onclick = () => {
    modal.style.top = 0 + 'px'
    modal.style.transition = 800 + 'ms'
}
btnBot.onclick = () => {
    modal.style.top = -400 + 'px'
    modal.style.transition = 800 + 'ms'
}

let btns = document.querySelectorAll('.tabheader__item[data-food]')
let img = document.querySelector('.imog')

let foods = {
    vegy: './img/tabs/vegy.jpg',
    elite: './img/tabs/elite.jpg',
    post: './img/tabs/post.jpg',
    hamburger: './img/tabs/hamburger.jpg'
}


btns.forEach( btn => {
    btn.onclick = (boom) => {
        let key = btn.getAttribute('data-food')
        img.src = foods[key]
        boom.target.classList.toggle("tabheader__item_active")
    }
})


// window.onscroll = function() {
//     let scrolled = window.pageYOffset;
//     console.log( 'Позиция скрола: '+scrolled  );
//     let modal = document.querySelector('.modal_bg')
//     if(scrolled == 3761){
//         modal.style.top = 0 + 'px'
//         modal.style.transition = 800 + 'ms'
//     }

// };

let genderParent = document.querySelector('#gender')
let gender = genderParent.querySelectorAll('.calculating__choose-item')
let height = document.querySelector('#height')
let weight = document.querySelector('#weight')
let age = document.querySelector('#age')
let activeBtns = document.querySelectorAll('[data-active]')
let result = document.querySelector('.calculating__result').firstChild.nextSibling


let user = {
    gender: '',
    height: 0,
    weight: 0,
    age: 0,
    activities: 1.2
}

gender.forEach(item => {
    item.onclick = () => {
        gender.forEach(a => a.classList.remove('calculating__choose-item_active'))  

        item.classList.add('calculating__choose-item_active')

        let gen = item.getAttribute('data-gen')

        user.gender = gen
    }
})


height.onkeyup = () => {
    user.height = height.value
    user.height = +user.height
}
weight.onkeyup = () => {
    user.weight = weight.value
    user.weight = +user.weight
}
age.onkeyup = () => {
   user.age = age.value 
   user.age = +user.age
}

activeBtns.forEach(item => {
    item.onclick = () => {
        activeBtns.forEach(a => a.classList.remove('calculating__choose-item_active'))

        item.classList.add('calculating__choose-item_active')
        
        let active = item.getAttribute('data-active')

        user.activities = +active

        calculate(user)
    }
})


// Для женщин: (10 х вес в кг) + (6,25 х рост в см) – (5 х возраст в г) – 161;
// Для мужчин: (10 х вес в кг) + (6,25 х рост в см) – (5 х возраст в г) + 5.

let calculate = (data) => {
    if(data.gender === 'man') {
        let calc = (10 * data.weight) + (6.25 * data.height) - (5 * data.age) + 5 
        calc = calc * data.activities

        result.innerHTML = Math.round(calc)
    } else {
        let calc = (10 * data.weight) + (6.25 * data.height) - (5 * data.age) - 161 
        calc = calc * data.activities

        result.innerHTML = Math.round(calc)
    } 

}
window.addEventListener("scroll",() => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    modal.classList.add('active_one')
});
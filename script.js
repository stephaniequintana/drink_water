// const smallCups = document.querySelectorAll('.cup-small')
// const liters = document.getElementById('liters')
// const percentage = document.getElementById('percentage')
// const remained = document.getElementById('remained')

// updateBigCup()

// smallCups.forEach((cup, idx) => {
//     cup.addEventListener('click', () => highlightCups(idx))
// })

// function highlightCups(idx) {
//     if (idx===7 && smallCups[idx].classList.contains("full")) idx--;
//     else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
//         idx--
//     }

//     smallCups.forEach((cup, idx2) => {
//         if(idx2 <= idx) {
//             cup.classList.add('full')
//         } else {
//             cup.classList.remove('full')
//         }
//     })

//     updateBigCup()
// }

// function updateBigCup() {
//     const fullCups = document.querySelectorAll('.cup-small.full').length
//     const totalCups = smallCups.length

//     if(fullCups === 0) {
//         percentage.style.visibility = 'hidden'
//         percentage.style.height = 0
//     } else {
//         percentage.style.visibility = 'visible'
//         percentage.style.height = `${fullCups / totalCups * 330}px`
//         percentage.innerText = `${fullCups / totalCups * 100}%`
//     }

//     if(fullCups === totalCups) {
//         remained.style.visibility = 'hidden'
//         remained.style.height = 0
//     } else {
//         remained.style.visibility = 'visible'
//         liters.innerText = `${2 - (250 * fullCups / 1000)}L`
//     }
// }

const remained = document.getElementById('remained');
const liters = document.getElementById('liters');
const percent = document.getElementById('percentage');
const cups = document.querySelectorAll('.cup-small');

fillGoalCup();

cups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
  if (idx===7 && cups[idx].classList.contains("full")) idx--;
  else if(cups[idx].classList.contains('full') && !cups[idx].nextElementSibling.classList.contains('full')) {
      idx--
  }

  cups.forEach((cup, idx2) => {
      if(idx2 <= idx) {
          cup.classList.add('full')
      } else {
          cup.classList.remove('full')
      }
  })

  fillGoalCup();
}

function fillGoalCup(){
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  
  if(fullCups === 8) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
    
  } else {
      remained.style.visibility = 'visible'
      liters.innerText = `${2 - ((fullCups) * .25)}L`
  }
    if(fullCups === 0) {
      percent.style.visibility = 'hidden'
      percent.style.height = 0
  } else {
      percent.style.visibility = 'visible'
      percent.style.height = `${(fullCups * .125) * 330}px`;
      percent.innerText = `${(fullCups * 12.5)}%`;
  }
}
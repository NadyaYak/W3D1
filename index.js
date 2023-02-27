let counter = 0
let picContainer = [
    "http://cdn-media.backstage.com/files/media/edit/image/39015/original.jpg",
    'https://www.themoviedb.org/t/p/w500/u2tnZ0L2dwrzFKevVANYT5Pb1nE.jpg',
     "https://media1.popsugar-assets.com/files/thumbor/aNKrWbAlk76kH7TrMEU-5WD0AHs/607x0:3032x2425/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2022/08/18/693/n/1922153/d62f9f6662fe5d18b3d0c0.27504321_/i/meagan-good-bixie-haircut.jpg"
]
   





const switchPic = () => {
    let screen = document.querySelector('.postMain2')
    // Create Element
    let movableImg = document.createElement('img')
    movableImg.setAttribute('class','postMain2')
    movableImg.setAttribute('src', picContainer[counter])
    screen.replaceWith(movableImg)
}

const addToCounter = () => {
    switchPic()
    counter++
    console.log(counter);
}

// Clean Kitchen
const cleanDishes = () => {
  console.log(" Now Cleaning Dishes")
}
const mopFloor = () => {
  console.log("Now Mopping Floor")
}

const organizeFridge = () => {
  console.log("Now Organizing Fridge")
}


const cleanTheKitchen = () => {
  cleanDishes()
  mopFloor()
  organizeFridge()
  console.log("Mama said Floor Smells Still ")
  mopFloor()
  console.log("Dad Found Grime on Plates")
  cleanDishes()
}

cleanTheKitchen()


 const computeArea = (width,height) => {
//   area = width * height 
//     console.log(area)
//   }

// computeArea(20,20)


// // Hey I want you to do this
// const addAges = (a, b, c, d, e) => {
//   // ..by doing this
//   let total = a + b + c + d + e
//   console.log(total)
// }

// addAges(1, 43, 66, 34, 8)

// addAges(1.5, 4, 6, 3, 8)



const planetHasWater =(planet)=>{
  if(planet.toLowerCase() === "earth" || planet.toLowerCase() ==="Mars" ){
    console.log("TRUUUU")
    return true 
  }else{
    console.log("NAHHH")
    return false
  }
}


planetHasWater("Earth") 
planetHasWater("EARth") 
planetHasWater("EarTH") 
planetHasWater("EARTH") 
planetHasWater("Earf")
   

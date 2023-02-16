import { format } from "date-fns"
import { ru } from "date-fns/locale"

async function loadTours(){
    const response = await fetch("https://www.bit-by-bit.ru/api/student-projects/tours")
    const data = await response.json()

    return data
}

function searchTours(tours) {
    document.getElementById("myContainer").innerHTML = ""
    tours.forEach((tour) => {
        document.getElementById("myContainer").innerHTML += `
            <div class="bg-white rounded-xl overflow-hidden flex flex-col justify-between">
               <div>
                <img class="h-80 w-full" alt="изображение" src = "${tour.image}"/>
      
                <div class="p-6">
                    <div>
                        <p class="text-yellow-600 fond-medium hover:underline">
                            <a href="#">Для всей семьи</a>
                        </p>
                        <a href="#">
                          <p class="font-bold mt-3 text-xl">${tour.country}</p>
                          <span class="font-bold mt-3 text-center text-lg">${tour.city}</span>
                          <span class="font-bold mt-3 text-center text-lg">${tour.hotelName}</span>
                          <p class="font-medium mt-1 v text-lg">${tour.price}</p>
                          <p class="font-medium  text-gray-700 mt-3 text-lg">${format(new Date(tour.startTime), "dd MMMM yyyy", {locale: ru})} - ${format(new Date(tour.endTime), "dd MMMM yyyy", {locale: ru})}</p>
                          <p class="text-gray-500 mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Architecto accusantium praesentium eius, ut atque fuga culpa, 
                            similique sequi cum eos quis dolorum.
                          </p>
                        </a>
      
                    </div>
      
                    <div class="mt-3 text-gray-500 text-sm flex items-center ">

                    </div>
                    <button id class="button-color mt-4">Подробнее</button>
                </div>
                <div id=""></div>
                 
               </div>
               
            `
    })
}


function filterByCountry(tours,country){
    if(country){
        const filteredTours = tours.filter((tour) => {
            return tour.country === country
    })
    searchTours(filteredTours)
    } else{
    searchTours(tours)
  }
}

function filterByPrice(tours){
    let price = document.getElementById("price").value;
    document.getElementById("hidden").innerHTML = ""
    document.getElementById("hidden").innerHTML += 
    `
    <div>Вы выбрали цену: ${price}</div>
    `
    const filtered = tours.filter((tour) => {
        return tour.price <= price
    })
    searchTours(filtered)
}
   


async function init(){
    const tours = await loadTours()
    searchTours(tours)

    document.getElementById("maldives").addEventListener("click",() => filterByCountry(tours, "Мальдивы"))
    document.getElementById("thailand").addEventListener("click",() => filterByCountry(tours, "Тайланд"))
    document.getElementById("indonesia").addEventListener("click",() => filterByCountry(tours, "Индонезия"))
    document.getElementById("egypt").addEventListener("click",() => filterByCountry(tours, "Египет"))
    document.getElementById("cyprus").addEventListener("click",() => filterByCountry(tours, "Кипр"))
    document.getElementById("all").addEventListener("click",() => filterByCountry(tours))
    document.getElementById("price").addEventListener("change",() => filterByPrice(tours))
}

init()


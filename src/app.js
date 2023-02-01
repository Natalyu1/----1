import { format } from "date-fns"
import { ru } from "date-fns/locale"

async function searchTours() {
    const respanse = await fetch(
        "https://www.bit-by-bit.ru/api/student-projects/tours"
    )
    const tours = await respanse.json()

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
                    <button class="button-color mt-4 pl-6">Подробнее</button>
                </div>
                 
               </div>
               
            `
    })
}
searchTours()

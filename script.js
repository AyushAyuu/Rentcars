function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.log("Component load error:", error));
}

loadComponent("header", "header.html");
loadComponent("footer", "footer.html");
loadComponent("banner", "banner.html");
loadComponent("about", "about.html");
loadComponent("how-work", "how-work.html");
loadComponent("car-rental", "car-rental.html");
loadComponent("contact", "contact.html");




 const carData = [
  {
    "name": "Jaguar XE P250",
    "rating": "4.8",
    "reviews": "2,436 reviews",
    "passengers": "5 Passengers",
    "gear": "Automatic",
    "ac": "Air Conditioning",
    "doors": "4 Doors",
    "price": "Rs 1,800/day",
    "image": "/Jaguar_XE_P250.png"
  },
  {
    "name": "BMW 5 Series 530i",
    "rating": "4.9",
    "reviews": "3,120 reviews",
    "passengers": "5 Passengers",
    "gear": "Automatic",
    "ac": "Air Conditioning",
    "doors": "4 Doors",
    "price": "Rs 2,000/day",
    "image": "/BMW_5_Series_530i.png"
  },
  {
    "name": "Mercedes-Benz E-Class",
    "rating": "4.8",
    "reviews": "4,050 reviews",
    "passengers": "5 Passengers",
    "gear": "Automatic",
    "ac": "Air Conditioning",
    "doors": "4 Doors",
    "price": "Rs 1,950/day",
    "image": "/Mercedes-Benz E-Class.png"
  },
  {
    "name": "Audi A6",
    "rating": "4.7",
    "reviews": "2,890 reviews",
    "passengers": "5 Passengers",
    "gear": "Automatic",
    "ac": "Air Conditioning",
    "doors": "4 Doors",
    "price": "Rs 1,850/day",
    "image": "/Audi A6.jpg"
  },
  {
    "name": "Toyota Fortuner",
    "rating": "4.6",
    "reviews": "5,640 reviews",
    "passengers": "7 Passengers",
    "gear": "Automatic",
    "ac": "Air Conditioning",
    "doors": "5 Doors",
    "price": "Rs 2,200/day",
    "image": "/Toyota_Fortuner.png"
  },
  {
    "name": "Toyota Innova Crysta",
    "rating": "4.7",
    "reviews": "6,980 reviews",
    "passengers": "7 Passengers",
    "gear": "Automatic",
    "ac": "Air Conditioning",
    "doors": "5 Doors",
    "price": "Rs 2,650/day",
    "image": "/Toyota Innova Crysta.jpg"
  },
  {
    "name": "Hyundai Verna",
    "rating": "4.5",
    "reviews": "4,210 reviews",
    "passengers": "5 Passengers",
    "gear": "Automatic",
    "ac": "Air Conditioning",
    "doors": "4 Doors",
    "price": "Rs 2,300/day",
    "image": "/Hyundai Verna.jpg"
  },
  {
    "name": "Maruti Swift",
    "rating": "4.4",
    "reviews": "7,850 reviews",
    "passengers": "5 Passengers",
    "gear": "Automatic",
    "ac": "Air Conditioning",
    "doors": "4 Doors",
    "price": "Rs 2,300/day",
    "image": "/Maruti_Swift.png"
  }
]
;


    function loadCars() {
        let output = "";

        carData.forEach(car => {
            output += `
                <div class="col-lg-3 col-md-6 mb-4" data-aos="fade-zoom-in">
                    <div class="car-card">
                        <img src="${car.image}" alt="${car.name}" class="car-log">
                        <h4 class="car-title">${car.name}</h4>

                        <p class="car-text"><img src="/star (1).png"/> ${car.rating} (${car.reviews})</p>
                        <div class="d-grid mt-2" style="grid-template-columns: repeat(2,1fr); gap: 10px;">
                        <p class="car-text"><img src="/user-avatar.png"/> ${car.passengers}</p>
                        <p class="car-text"><img src="/technology.png"/> ${car.gear}</p>
                        <p class="car-text"><img src="/air-conditioner.png"/> ${car.ac}</p>
                        <p class="car-text"><img src="/car-door.png"/> ${car.doors}</p>

                        </div>
                        <hr />
                        <h5 class="mt-2">Price: <strong>${car.price}</strong></h5>
                        <a href="#contact"><button class="rent-btn">Rent Now →</button></a>
                    </div>
                </div>
            `;
        });

        document.getElementById("carContainer").innerHTML = output;
    }

    loadCars();

$(document).ready(function () {

        $("#pickupDate, #returnDate").datepicker({
            dateFormat: "dd M yy",
            minDate: 0
        });
   

});






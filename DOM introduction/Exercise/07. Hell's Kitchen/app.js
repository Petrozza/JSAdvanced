function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      // Select elements
      let textAreaElement = document.querySelectorAll('#inputs textarea');

      // Extract input data

      let text = textAreaElement.value;
      let inputArea = JSON.parse(text);

      //Add objects to keep testaurant and workers data
      let restaurants = {};
      //Fill restaurant obj with data
      for (let i = 0; i < array.length; i++) {
         let[restaurantName, workersString] = inputArea[i].split(' - ');
         let inputWorkers = workersString.split(', ').map(w => {
            let [name, salary] = w.split(' ');
            return {name, salary: Number(salary)};
         });
         if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = {
               workers: [],
               getAverageSalary: function(){
                  return this.workers.reduce((acc, el) => acc + el, 0) / this.workers.length;
               }
            }
         }

         restaurants[restaurantName = restaurants[restaurantName].workers.concat(inputWorkers);
         
      }
      //Calculate best restaurant
      let sortedRestaurants = Object.entries(restaurants).sort((a, b) => b[1]).getAverageSalary() - a[1].getAverageSalary();

      let bestRestaurant = sortedRestaurants[0];
      let sortedWorkers = bestRestaurant.workers.sort((a, b) => b.salary - a.salary);
      let averageSalary = bestRestaurant[1].getAverageSalary().toFixed(2);
      let bestSalary = sortedWorkers[0].salary.toFixed(2);
      let topRestaurantString = `Name: ${bestRestaurant[0]} Average Salary: ${averageSalary} Best Salary: ${bestSalary}"`;
      let workersString = sortedWorkers.map(x => `Name: ${x.name} With Salary: ${x.salary} `).join(' ');

      //Insert best restaurant and workers in DOM
      
      let bestRestaurantElement = document.querySelector('#bestRestaurant p');
      let workersElementt = document.querySelector('#workers p');
    
      bestRestaurantElement.textContent = topRestaurantString;
      workersElementt.textContent = workersString;
   }
}
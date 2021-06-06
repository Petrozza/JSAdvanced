function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchText = document.getElementById('searchField').value;
      let rowElements = Array.from(document.querySelectorAll('tbody, tr'));

      rowElements.forEach(el => {
         el.className = '';
      });

      
      rowElements.filter(el => {
         let cellsArray = Array.from(el.children);
         if (cellsArray.some(x => x.textContent.includes(searchText))) {
            el.className = 'select';
         }
      });

      searchText = '';

   }
}
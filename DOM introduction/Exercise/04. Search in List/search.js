function search() {
   let searchText = document.getElementById('searchText').value;
   let townElements = Array.from(document.querySelectorAll('#towns li'));

   townElements.forEach(el => {
      el.style.fontWeight = 'normal';
      el.style.textDecoration = 'none'; //return matching results back to normal view
   });

   let targetLis = townElements
      .filter(x => x.textContent.toLowerCase().includes(searchText))
      .map(x => {
         x.style.fontWeight = 'bold';
         x.style.textDecoration = 'underline';
      });

      let displayElement = document.getElementById('result');
      displayElement.textContent = `${targetLis.length} matches found`;
}

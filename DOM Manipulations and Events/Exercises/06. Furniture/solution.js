function solve() {

  let textAreas = document.querySelectorAll('#exercise textarea');
  let generateTextArea = textAreas[0];
  let buyTextarea = textAreas[1];

  let buttons = document.querySelectorAll('#exercise button');
  let generateButton = buttons[0];
  let buyButton = buttons[1];

  
  generateButton.addEventListener('click', generateItems);

  function generateItems() {

    let items = Array.from(JSON.parse(generateTextArea.value));
    let tableBody = document.querySelector('.table tbody');

    items.forEach(e => {
      let tr = document.createElement('tr');

      let imageTd = document.createElement('td');
      let image = document.createElement('img');
      image.src = e.img;
      imageTd.appendChild(image);

      let nameTd = document.createElement('td');
      let nameP = document.createElement('p');
      nameP.textContent = e.name;
      nameTd.appendChild(nameP);

      let priceTd = document.createElement('td');
      let priceP = document.createElement('p');
      priceP.textContent = e.price;
      priceTd.appendChild(priceP);

      let decFactorTd = document.createElement('td');
      let decFactorP = document.createElement('p');
      decFactorP.textContent = e.decFactor;
      decFactorTd.appendChild(decFactorP);

      let checkBoxTd = document.createElement('td');
      let checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBoxTd.appendChild(checkbox);

      tr.appendChild(imageTd);
      tr.appendChild(nameTd);
      tr.appendChild(priceTd);
      tr.appendChild(decFactorTd);
      tr.appendChild(checkBoxTd);

      tableBody.appendChild(tr);

    });

    buyButton.addEventListener('click', calculateFurniture);

    function calculateFurniture() {
      let tableRows = Array.from(document.querySelectorAll('.table tbody tr'));
      let selectedRows = tableRows.filter(row => row.querySelectorAll('input:checked').length > 0);

      let names = selectedRows
        .map(row => row.querySelector('td:nth-of-type(2) p'))
        .map(x => x.textContent)
        .join(', ');

      let prices = selectedRows
        .map(row => row.querySelector('td:nth-of-type(3) p'))
        .map(x => Number(x.textContent));

      let decFactors = selectedRows
        .map(row => row.querySelector('td:nth-of-type(4) p'))
        .map(x => Number(x.textContent));

      let totalPrice = prices.reduce((acc, el) => acc + el, 0).toFixed(2);
      let averageDecFactor = decFactors.reduce((acc, el) => acc + el, 0) / decFactors.length;

      let furntureText = `Bought furniture: ${names}`;
      let priceText = `Total price: ${totalPrice}`;
      let averageText = `Average decoration factor: ${averageDecFactor}`;

      buyTextarea.textContent = `${furntureText}\n${priceText}\n${averageText}`;
    }
  }

}
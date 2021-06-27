window.addEventListener('load', solution);

function solution() {
  let fullNameElement = document.getElementById('fname');
  let emailElement = document.getElementById('email');
  let phoneNumberElement = document.getElementById('phone');
  let addressElement = document.getElementById('address');
  let postalCodeElement = document.getElementById('code');

  
  const submitBtnElement = document.getElementById('submitBTN');
  submitBtnElement.addEventListener('click', createList);

  function createList() {
    let nameLiElement = document.createElement('li');
    nameLiElement.textContent = `Full Name: ${fullNameElement.value}`;

    let emailLiElement = document.createElement('li');
    emailLiElement.textContent = `Email: ${emailElement.value}`;

    let phoneLiElement = document.createElement('li');
    phoneLiElement.textContent = `Phone Number: ${phoneNumberElement.value}`;

    let addressLiElement = document.createElement('li');
    addressLiElement.textContent = `Address: ${addressElement.value}`;

    let postalLiElement = document.createElement('li');
    postalLiElement.textContent = `Postal Code: ${postalCodeElement.value}`;

    if (fullNameElement.value == '' ||
      emailElement.value == '' ||
      phoneNumberElement.value == '' ||
      addressElement.value == '' ||
      postalCodeElement.value == '') {
      return;
    }

    let ulPreviewElement = document.getElementById('infoPreview');
    ulPreviewElement.appendChild(nameLiElement);
    ulPreviewElement.appendChild(emailLiElement);
    ulPreviewElement.appendChild(phoneLiElement);
    ulPreviewElement.appendChild(addressLiElement);
    ulPreviewElement.appendChild(postalLiElement);



    fullNameElement.value = '';
    emailElement.value = '';
    phoneNumberElement.value = '';
    addressElement.value = '';
    postalCodeElement.value = '';

    document.getElementById('submitBTN').disabled = true;
    document.getElementById('editBTN').disabled = false;
    document.getElementById('continueBTN').disabled = false;

  }

  let EditBtnElement = document.getElementById('editBTN');
  EditBtnElement.addEventListener('click', editInfo);

  function editInfo() {
    fullNameElement.value = document.querySelector('#infoPreview > li:nth-child(1)').textContent.slice(11);
    
    emailElement.value = document.querySelector('#infoPreview > li:nth-child(2)').textContent.slice(7);
    phoneNumberElement.value = document.querySelector('#infoPreview > li:nth-child(3)').textContent.slice(14);
    addressElement.value = document.querySelector('#infoPreview > li:nth-child(4)').textContent.slice(9);;
    postalCodeElement.value = document.querySelector('#infoPreview > li:nth-child(5)').textContent.slice(13);;

    document.getElementById('submitBTN').disabled = false;
    document.getElementById('editBTN').disabled = true;
    document.getElementById('continueBTN').disabled = true;

    document.querySelector('#infoPreview > li:nth-child(1)').remove();
    document.querySelector('#infoPreview > li:nth-child(1)').remove();
    document.querySelector('#infoPreview > li:nth-child(1)').remove();
    document.querySelector('#infoPreview > li:nth-child(1)').remove();
    document.querySelector('#infoPreview > li:nth-child(1)').remove();
  }

  let continueBtnElement = document.getElementById('continueBTN');
  continueBtnElement.addEventListener('click', thanks)

  function thanks() {
    let elementToRemove = document.getElementById('block')
    elementToRemove.innerHTML = '';

    let message = document.createElement('h3');
    message.textContent = 'Thank you for your reservation!';
    elementToRemove.appendChild(message);
  }



}


function solve() {
  let textAreaElement = document.getElementById('input');
  let text = textAreaElement.value;
  let sentences = text.split('.')
  .filter(x => x!== '')
  .map(x => x + '.'); //for not losing point

  let parRoof = Math.ceil(sentences.length / 3);

  let resultDiv = document.getElementById('output');
  resultDiv.textContent = '';
  for (let i = 0; i < parRoof; i++) {
    resultDiv.innerHTML += `<p>${sentences.splice(0,3).join('')}</p>`
    
  }

}
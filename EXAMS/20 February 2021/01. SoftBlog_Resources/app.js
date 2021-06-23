function solve() {
   let creatorElement = document.getElementById('creator');
   let titleElement = document.getElementById('title');
   let categoryElement = document.getElementById('category');
   let contentElement = document.getElementById('content');

   let createButtonElement = document.querySelector('form .btn.create')
   let archiveTitlesList = [];

   createButtonElement.addEventListener('click', (e) => {
      e.preventDefault();

      //Content field
      let contentText = document.createElement('p');
      contentText.textContent = contentElement.value;

      //Author filed
      let creatorParagraph = document.createElement('p');
      creatorParagraph.textContent = 'Creator:';
      let authorName = document.createElement('strong');
      authorName.textContent = creatorElement.value;
      creatorParagraph.appendChild(authorName);

      //Category field
      let categoryParagraph = document.createElement('p');
      categoryParagraph.textContent = 'Category:'
      let categoryText = document.createElement('strong');
      categoryText.textContent = categoryElement.value;
      categoryParagraph.appendChild(categoryText);

      //Title field
      let titleText = document.createElement('h1');
      titleText.textContent = titleElement.value;

      //create article and childs
      let articleElement = document.createElement('article');

      articleElement.appendChild(titleText);
      articleElement.appendChild(categoryParagraph);
      articleElement.appendChild(creatorParagraph);
      articleElement.appendChild(contentText);

      let divForBtns = document.createElement('div');
      divForBtns.classList.add('buttons');

      //Delete and Archive buttons
      let deleteBtnElement = document.createElement('button');
      deleteBtnElement.classList.add('btn', 'delete');
      deleteBtnElement.textContent = 'Delete';

      let archiveBtnElement = document.createElement('button');
      archiveBtnElement.classList.add('btn', 'archive');
      archiveBtnElement.textContent = 'Archive';

      //append buttons
      divForBtns.appendChild(deleteBtnElement);
      divForBtns.appendChild(archiveBtnElement);
      articleElement.appendChild(divForBtns);

      let sections = document.querySelectorAll('.site-content section');
      sections[0].appendChild(articleElement);

      //clear input form
      creatorElement.value = '';
      titleElement.value = '';
      categoryElement.value = '';
      contentElement.value = '';

      //archive button behaviour
      archiveBtnElement.addEventListener('click', () => {
         let olElement = document.querySelector('.archive-section ol');
         let listElement = document.createElement('li');
         listElement.textContent = titleText.textContent;

         archiveTitlesList.push(listElement);
         archiveTitlesList.sort((a, b) => a.textContent.localeCompare(b.textContent));
         for (let title of archiveTitlesList) {
            olElement.appendChild(title);
         }
      });

      //delete button behaviour
      deleteBtnElement.addEventListener('click', () => {
         articleElement.remove();
      })


   });

};

/* <h2>Articles</h2>
<article>
   <h1>Arrays</h1>
   <p>Category:
      <strong>Programming</strong>
      </p>
      <p>Creator:
         <strong>John</strong>
         </p>
         <p>IloveJavaScript</p>
         <div class="buttons">
            <button class="btndelete">Delete</button>
            <button class="btnarchive">Archive</button>
            </div></article>
           <h2>Articles</h2> */



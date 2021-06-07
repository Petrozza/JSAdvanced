function validate() {
   document.getElementById('email').addEventListener('change', onChange);

   function onChange(e) {
       const email = e.target.value;
       if (/^[a-z]+@[a-z]+\.[a-z]+$/.test(email)) {
           e.target.className = '';
       } else {
            e.target.className = 'error';
       }
       
   }
}
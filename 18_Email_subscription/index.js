 const scriptURL = 'https://script.google.com/macros/s/AKfycbwL3b_Jd1ERIGeTKAefMBXKUPRoRY3wUADi9Kv2z_g3YBvQpM1h4TUpEKEU9yBO6U5y/exec'
  const form = document.forms["submit-to-google-sheet"]

  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(() => {
            msg.innerHTML = "Thank You For Subscribing!"
            setTimeout(function(){
                  msg.innerHTML = ""
            },5000);
            form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
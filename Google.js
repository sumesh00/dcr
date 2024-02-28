const scriptURL ="https://script.google.com/macros/s/AKfycbyC2534Xwp_uniSa3dgwqbNNr_G_hhorIwNebgVBC0pNm1Skauy4ZCq3qAhYTrovJ5hCw/exec"

const form = document.forms['email-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
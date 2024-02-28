const scriptURL ="https://script.google.com/macros/s/AKfycbw_9XovV7We04_awNNrxl9eZcfG5N8gdrrEjKoAROosi-zHEraEtVUksAbQgCKwOe00/exec"

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
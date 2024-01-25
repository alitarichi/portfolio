/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    //serverID - templateID - #form - publicKey
    emailjs.sendForm('service_v4z75uk','template_8xt10z6','#contact-form','oCJxoOQ41T4RgFNyp')
        .then(() => {
            //show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            //Remove message after five secods
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            //Clear input feilds
            contactForm.reset()

        }, () =>{
            //Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)
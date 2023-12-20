 const menuIcon=document.querySelector(".menu-icon"); 
 const container = document.querySelector('.container'); 


 menuIcon.addEventListener("click", ()=>{
    container.classList.toggle("change"); 
 })
 


 function submitForm() {
   const nameInput = document.querySelector('#contactForm input[name="name"]');
   const emailInput = document.querySelector(
     '#contactForm input[name="email"]'
   );
   const subjectInput = document.querySelector(
     '#contactForm input[name="subject"]'
   );
   const messageInput = document.querySelector(
     '#contactForm textarea[name="message"]'
   );

   // Check if elements are found before accessing their values
   if (!nameInput || !emailInput || !subjectInput || !messageInput) {
     alert('Error: Form elements not found!');
     return;
   }

   const name = nameInput.value || '';
   const email = emailInput.value || '';
   const subject = subjectInput.value || '';
   const message = messageInput.value || '';

   // Log the values to the console (for testing)
   console.log('Name:', name);
   console.log('Email:', email);
   console.log('Subject:', subject);
   console.log('Message:', message);

   // Handle form submission or other actions...
   // For testing, you can log the values to the console
   console.log('Name:', name);
   console.log('Email:', email);
   console.log('Subject:', subject);
   console.log('Message:', message);

   // Here, you can add the code to send the form data to the server
   // using fetch or another method. Replace the URL with your server endpoint.

   const formData = {
     name: name,
     email: email,
     subject: subject,
     message: message,
   };

   fetch('/submit-form', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(formData),
   })
     .then((response) => response.json())
     .then((data) => {
       if (data.status === 'success') {
         alert('Message sent successfully!');
         // You can redirect the user or perform other actions after successful submission
       } else {
         alert('Error sending message. Please try again later.');
       }
     })
     .catch((error) => {
       console.error('Error:', error);
     });
 }

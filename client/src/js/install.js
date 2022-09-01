// const installBtn = document.getElementById('installBtn'); //change variablr name???
// // textheader variable? 

// // Logic for installing the PWA
// // TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener('beforeinstallprompt', (event) => { //check if installed,  make visible
//     event.preventDefault();
//     installBtn.style.visibility = 'visible';
//     textHeader.textContent = "Click the button to install";

    

// // TODO: Implement a click event handler on the `butInstall` element
// // butInstall.addEventListener('click', async () => {

//     installBtn.addEventListener('click', () => { //once you see not installed, add event listenoer on now visble btn, prompt user to get app installed
//         event.prompt();
//         installBtn.setAttribute('disabled', true);
//         installBtn.textContent = 'installed';
//     })
// });


// // });

// // TODO: Add an handler for the `appinstalled` event
// window.addEventListener('appinstalled', (event) => { //check to see if app is installed, dont display button and switch text header to "successfully installed"
// textHeader.textContent = 'Successfully installed!';
// console.log('appinstalled', event)


// });


//===============================//



const butInstall = document.getElementById("buttonInstall");

window.addEventListener('beforeinstallprompt', (event) => {

    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
  });

butInstall.addEventListener('click', async () => {
  
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  // Show prompt
  promptEvent.prompt();
  
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  // Clear prompt
  window.deferredPrompt = null;
}); 

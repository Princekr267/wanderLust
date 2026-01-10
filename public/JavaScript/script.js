// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

let taxSwitch = document.getElementById("switchCheckDefault");
if (taxSwitch) {
  taxSwitch.addEventListener("click", () => {
    let taxInfo = document.getElementsByClassName("tax-info");
    for (info of taxInfo) {
      if (info.style.display != "inline") {
        info.style.display = "inline";
      } else {
        info.style.display = "none";
      }
    }
  });
}

// Move tax toggle to navbar menu on mobile
const taxToggle = document.querySelector(".tax-switch");
const popupMenuNav = document.getElementById('popupMenu');

if (taxToggle && popupMenuNav) {
  function handleTaxToggleResize() {
    const taxInPopup = popupMenuNav.querySelector('.tax-toggle-menu');
    
    if (window.innerWidth <= 768) {
      if (!taxInPopup) {
        const taxToggleClone = taxToggle.cloneNode(true);
        taxToggleClone.classList.remove('tax-switch');
        taxToggleClone.classList.add('tax-toggle-menu');
        taxToggleClone.style.display = "flex";
        popupMenuNav.appendChild(taxToggleClone);
        
        // Re-attach event listener to cloned switch
        const clonedSwitch = taxToggleClone.querySelector('#switchCheckDefault');
        if (clonedSwitch) {
          clonedSwitch.id = 'switchCheckDefaultMobile';
          clonedSwitch.addEventListener('click', () => {
            let taxInfo = document.getElementsByClassName('tax-info');
            for (info of taxInfo) {
              if (info.style.display != 'inline') {
                info.style.display = 'inline';
              } else {
                info.style.display = 'none';
              }
            }
          });
        }
      }
    } else {
      if (taxInPopup) {
        taxInPopup.remove();
      }
    }
  }

  handleTaxToggleResize();
  window.addEventListener('resize', handleTaxToggleResize);
}


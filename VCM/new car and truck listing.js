//Validate IMAGEs
function validateImages() {
    var imageInputs = document.getElementsByName("my-new-listing-photos");
    if (imageInputs.length === 0) {
      alert("Please Add Images");
      return false;
    }
    for (var i = 0; i < imageInputs.length; i++) {
      if (imageInputs[i].value.trim() === "") {
        alert("Image Required");
        return false;
      }
    }
    return true;
  }
  document.getElementById("new-listing-submit").addEventListener("click", function (event) {
    if (!validateImages()) {
      event.preventDefault();
    }
  });
  document.getElementById("new-listing-submit-2").addEventListener("click", function (event) {
    if (!validateImages("new-listing-submit-2")) {
      event.preventDefault();
    }
  });;

// Dragable image uploade listener
const assignUniqueIDs = () => {
    const inputs = document.querySelectorAll('input[name="my-new-listing-photos"]');
    inputs.forEach((input, index) => {
      const inputID = `input_${index + 1}`;
      input.id = inputID;
      const previewElement = document.getElementById(`preview${index + 1}`);
      const msInput = document.getElementById(`msinput${index + 1}`);
      const msBoxes = document.getElementsByClassName(`msbox${index + 1}`);
      if (previewElement) {
        previewElement.src = input.value;
        if (msInput) {
          msInput.textContent = input.value;
        }
        for (let j = 0; j < msBoxes.length; j++) {
          if (previewElement.src === '') {
            msBoxes[j].style.display = 'none';
          } else {
            msBoxes[j].style.display = 'block';
          }
        }
      }
    });
    const maxIndex = inputs.length;
    for (let i = inputs.length + 1; i <= maxIndex + 1; i++) {
      const previewElement = document.getElementById(`preview${i}`);
      const msBoxes = document.getElementsByClassName(`msbox${i}`);
      if (previewElement) {
        previewElement.src = '';
        for (let j = 0; j < msBoxes.length; j++) {
          msBoxes[j].style.display = 'none';
        }
      }
    }
  };
  const updateInputValue = () => {
    const previews = document.querySelectorAll('[id^="preview"]');
    const input = document.querySelector('input[data-input="drag-order"]');

    const values = Array.from(previews).map(preview => {
      const index = preview.id.replace('preview', '');
      return (preview.src === 'https://www.thevintagecarmarket.com/app/new-listing' || preview.src === 'https://assets-global.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg') ? '' : preview.src || '';
    }).join('|');

    input.value = values;
  };

  const observer = new MutationObserver(() => {
    assignUniqueIDs();
    updateInputValue();
  });

  const targetNode = document.body;
  const config = { childList: true, subtree: true };

  assignUniqueIDs();
  observer.observe(targetNode, config);;

  // Dragable image uploade listener End

  


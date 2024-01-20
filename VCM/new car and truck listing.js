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

  //Draggable image function

  document.addEventListener('DOMContentLoaded', (event) => {
    let dragSrcEl = null;

    function handleDragStart(e) {
      this.style.opacity = '0.4';
      dragSrcEl = this;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
      e.dataTransfer.dropEffect = 'move';
      return false;
    }

    function handleDragEnter(e) {
      this.classList.add('over');
    }

    function handleDragLeave(e) {
      this.classList.remove('over');
    }

    function handleDrop(e) {
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
      }

      updateInputValue();

      return false;
    }

    function handleDragEnd(e) {
      this.style.opacity = '1';
      items.forEach(function (item) {
        item.classList.remove('over');
      });
    }

    let items = document.querySelectorAll('.ms-boxes .ms-box');
    items.forEach(function (item) {
      item.addEventListener('dragstart', handleDragStart, true);
      item.addEventListener('dragenter', handleDragEnter, false);
      item.addEventListener('dragover', handleDragOver, false);
      item.addEventListener('dragleave', handleDragLeave, false);
      item.addEventListener('drop', handleDrop, false);
      item.addEventListener('dragend', handleDragEnd, false);
    });
  });

  ;
  //make pickerr
  var selectElement = document.getElementById("make-picker");
  var makes = [
    "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", "Dodge", "Ferrari", "Ford", 
    "GMC", "Honda", "Jaguar", "Lamborghini", "Lincoln", "Mercury", 
    "Nissan", "Plymouth", "Pontiac", "Porsche", "Toyota", "American Motors Corporation",
    // A
    "AC", "AJS", "AM General", "ASA", "ATK", "ATS", "Abarth", "Acadian", "Ace", "Acura", 
    "Alfa Romeo", "Allard", "Allstate", "Alpine", "Alvis", "American Motors", "Amphicar", 
    "Apollo", "Aprilia", "Ariel", "Arnolt-Bristol", "Arnolt-MG", "Aston Martin", "Auburn", 
    "Audi", "Austin", "Austin-Healey", "Avanti",
    "BMW", "BSA", "Beaumont", "Beck", "Benelli", "Bentley", "Berkeley", "Bertone", 
    "Beta", "Bimota", "Bitter", "Bizzarrini", "Borgward", "Bricklin", "Bridgestone", 
    "Bristol", "Brough Superior", "Buell", "Bugatti", "Buick", "Bultaco",
    // C
    "CCM", "CZ", "Cadillac", "Cagiva", "Can-Am", "Checker", "Cheetah", "Chevrolet", 
    "Chrysler", "Chrysler Ghia", "Cisitalia", "Citroen", "Clenet", "Clipper", "Connaught", 
    "Continental", "Corbin", "Cord", "Crosley", "Cunningham",
    // D
    "DKW", "Daimler", "Datsun", "Davis", "DeSoto", "DeTomaso", "Delage", "Delahaye", 
    "Delorean", "Denzel", "Deutsch-Bonnet", "Devin", "Dodge", "Dual-Ghia", "Ducati", 
    "Duesenberg", "Duesenberg II",
    // E
    "Eagle", "Edsel", "Edwards", "Elva", "Excalibur", "Excelsior",
    // F
    "Facel Vega", "Ferrari", "Fiat", "Ford", "Frazer", "Frazer Nash", "Frontenac",
    // G
    "GMC", "Gas Gas", "Ghia", "Ginetta", "Glas", "Glassic", "Glasspar", "Goggomobil", 
    "Goliath", "Gordon-Keeble", "Greeves", "Griffith", "Guanci",
    // H
    "HRG", "Harley-Davidson", "Healey", "Heinkel", "Henderson", "Henry J", "Hercules", 
    "Hildebrand & Wolfmuller", "Hodaka", "Honda", "Hudson", "Husaberg", "Husqvarna",
    // I
    "Imperial", "Indian", "Intermeccanica", "International (IHC)", "Iso",
    // J
    "Jaguar", "Jawa", "Jeep", "Jensen", "Jensen-Healey", "Jowett",
    // K
    "KTM", "Kaiser", "Kawasaki", "Kurtis",
    // L
    "Laforza", "Lagonda", "Lamborghini", "Lancia", "Land Rover", "Laverda", 
    "Lea-Francis", "Lexus", "Lincoln", "Lotus",
    // M
    "MG", "MV Agusta", "Maico", "Marcos", "Maserati", "Matchless", "Matra", "Mazda", 
    "McLaren", "Mercedes-Benz", "Mercury", "Merkur", "Messerschmitt", "Metropolitan", 
    "Mini", "Mitsubishi", "Mohs", "Montesa", "Monteverdi", "Moretti", "Morgan", 
    "Morris", "Moto Guzzi", "Moto Morini", "Motor-Piper", "Munch", "Muntz", "Mustang",
    // N
    "NSU", "Nash", "Nash-Healey", "Nissan", "Norton",
    // O
    "OSCA", "OSI", "OTAS", "Oldsmobile", "Opel", "Ossa",
    // P
    "Packard", "Panoz", "Panther", "Peerless", "Pegaso", "Penton", "Peugeot", 
    "Pininfarina", "Playboy", "Plymouth", "Pontiac", "Pope", "Porsche", "Puma",
    // Q
    "Qvale",
    // R
    "Rambler", "Renault", "Replicar", "Rickman", "Riley", "Rolls-Royce", "Rover", 
    "Royal Enfield",
    // S
    "SS", "SWM", "Saab", "Sabra", "Saleen", "Saturn", "Shelby", "Siata", "Singer", 
    "Skorpion", "Studebaker", "Stutz", "Subaru", "Sunbeam", "Sunbeam-Talbot", "Suzuki", 
    "Swallow",
    "TVR", "Talbo", "Talbot-Lago", "Tatra", "Tesla", "Toyota", "Triumph", "Tucker", 
    "Turner",
    "Vector", "Velocette", "Vincent", "Volkswagen", "Volvo",
    "Warwick", "Whizzer", "Willys", "Willys-Jeep", "Willys-Overland", "Wolseley", 
    "Woodill",
    "Yamaha", "Yankee",
    "Zundapp"
  ];
  for (var i = 0; i < 273; i++) {
    var make = makes[i];
    var option = document.createElement("option");
    option.text = make;
    option.value = make;
    selectElement.appendChild(option);
  };;

    var quill = new Quill('#DescriptionV-3', {
    modules: {
      toolbar: [
        [{ 'header': [2, 3, 4, 5, 6, false] }],

        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block', 'link'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],

        ['clean']
      ]
    },
    placeholder: 'The Vintage Car Market',
    theme: 'snow'
  });
  var form = document.querySelector('#new-listing-form');
  form.onsubmit = function() {
    var about = document.querySelector('textarea[name=DescriptionV-3]');
    about.value = quill.root.textContent;
    console.log("Submitted", $(form).serialize(), $(form).serializeArray());
  };

function toggleMenu() {
  const menu = document.getElementById('dropdownMenu');
  menu.classList.toggle('hidden');
  menu.classList.toggle('show');
}
 document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown');

    dropdownToggle.addEventListener('click', function () {
      dropdownMenu.classList.toggle('dropdown-active');
    });

    document.addEventListener('click', function (event) {
      if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('dropdown-active');
      }
    });
  });
document.addEventListener("DOMContentLoaded", function() {
  var pagesDropdown = document.getElementById('pagesDropdown');
  var dropdownMenu = document.getElementById('dropdownMenu');

  pagesDropdown.addEventListener('click', function(event) {
    dropdownMenu.classList.toggle('hidden');
    event.stopPropagation();
  });

  // Close dropdown menu when clicking outside of it
  document.addEventListener('click', function(event) {
    var isClickInside = pagesDropdown.contains(event.target) || dropdownMenu.contains(event.target);
    if (!isClickInside) {
      dropdownMenu.classList.add('hidden');
    }
  });
});



document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slides");
    const slideWidth = slides.clientWidth;
    let currentIndex = 0;
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.children.length;
      slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  
    setInterval(nextSlide, 2000); // Change slide every 5 seconds
  });
  // tailwind.config.js

module.exports = {
    // Other configurations...
    plugins: [
      require('@tailwindcss/ui'),
      // Other plugins...
    ],
  }

  // JavaScript for Desktop Dropdown
  const dropdownBtn = document.getElementById('dropdown-btn');
  const dropdownMenu = document.getElementById('dropdown-menu');

  dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
  });

  // JavaScript for Mobile Dropdown
  const mobileDropdownBtn = document.getElementById('mobile-dropdown-btn');
  const mobileDropdownMenu = document.getElementById('mobile-dropdown-menu');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileDropdownBtn.addEventListener('click', () => {
    mobileDropdownMenu.classList.toggle('hidden');
  });

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

// functionObjects("All classes");
// function filterObjects(c){
//   var x,i;
//   x=document.getElementsByClassName("border");
//   if (c == "All Classes") c= "";
//   for (i=0; i< x.length; i++){
//     removeClass(x[i], "show");
//     if(x[i].className.indexOf(c) > -1) addClass(x[i], "show")
//   }
// }

// function addclass(element, name){
//   var i,arr1,arr2;
//   arr1 = element.className.split("")
//   arr2 = name.split(" ");
//   for (i =0; i < arr2.length; i++){
//     if (arr1.indexOf(arr[i]) == -1){
//       element.className += " " + arr2[i];
//     }
//   }
// }

// function removeClass(element, name){
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i=0; i < arr2.length; i++){
//     while(arr1.indexOf(arr2[i]) > -1){
//      arr1.splice(arr1.indexOf(arr2[i]),1) 
//     }
//   }
//   element.className = arr1.join(" ");
// }
function filterObjects(classType, button) {
  var tableRows = document.querySelectorAll("tbody tr");
  tableRows.forEach(function(row) {
    var cells = row.querySelectorAll("td");
    var showRow = true;
    cells.forEach(function(cell, index) {
      if (index !== 0 && cell.innerText.includes(classType)) {
        showRow = true;
        cell.classList.add("bg-red-500"); // Add background color to matched cells
      } else {
        cell.classList.remove("bg-red-500"); // Remove background color from unmatched cells
      }
    });
    row.style.display = showRow ? "table-row" : "none";
  });

  // Highlight the clicked button and remove highlight from others
  var buttons = document.querySelectorAll("button");
  buttons.forEach(function(btn) {
    btn.classList.remove("bg-red-600", "text-white");
  });
  button.classList.add("bg-red-600", "text-white");

  // Highlight the "Powerlifting" button
  var buttons = document.querySelectorAll("button");
  buttons.forEach(function(btn) {
    btn.classList.remove("bg-red-600", "text-white");
  });
  button.classList.add("bg-red-600", "text-white");
}



function calculateBMI() {
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value) / 100; // converting height to meters

  if (isNaN(weight) || isNaN(height)) {
    document.getElementById('result').innerText = 'Please enter valid weight and height.';
    return;
  }

  var bmi = weight / (height * height);
  var bmiCategory;

  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = 'Overweight';
  } else {
    bmiCategory = 'Obesity';
  }

  document.getElementById('result').innerText = 'Your BMI is ' + bmi.toFixed(2) + '. You are ' + bmiCategory + '.';
}



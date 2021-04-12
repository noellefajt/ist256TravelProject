function openTab(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, contenttabs, linktabs;
    tabcontent = document.getElementsByClassName("contenttabs");
    for (i = 0; i < contenttabs.length; i++) {
      contenttabs[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    linktabs = document.getElementsByClassName("linktabs");
    for (i = 0; i < linktabs.length; i++) {
      linktabs[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  //document.getElementById("defaultOpen").click();
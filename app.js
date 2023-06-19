// Get the download button element
var downloadBtn = document.querySelector('.main-btn');

// Define the URL or path 
var cvUrl = 'resume.pdf';

// Add a click event listener to the download button
downloadBtn.addEventListener('click', function() {
  // Create a temporary link element
  var link = document.createElement('a');
  link.href = cvUrl;
  link.target = '_blank';
  link.download = 'resume.pdf'; 

  // Append the link to the document body
  document.body.appendChild(link);

  // Simulate a click on the link to trigger the download
  link.click();

  // Remove the temporary link from the document body
  document.body.removeChild(link);
});

// Get all the control elements
const controlElements = document.querySelectorAll('.control');

// Add a click event listener to each control 
controlElements.forEach((control) => {
  control.addEventListener('click', () => {
    // Get the data-id attribute value
    const dataId = control.getAttribute('data-id');
    
    // Log the data-id value 
    console.log(`Control clicked: ${dataId}`);
    
    if (dataId === 'github') {
      // Perform actions for GitHub control
      window.open('https://github.com/Maggie-Duhart', '_blank');
      console.log('GitHub control clicked!');
    } else if (dataId === 'linkedin') {
      // Perform actions for LinkedIn control
      window.open('https://www.linkedin.com/in/magdalenaduhart/', '_blank');
      console.log('LinkedIn control clicked!');
    } else if (dataId === 'contact') {
      // Perform actions for Contact control
      window.location.href = 'mailto:magdalena.duhart@gmail.com';
      console.log('Contact control clicked!');
    }
  
  });

});

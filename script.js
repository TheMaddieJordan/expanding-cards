// The Goal is to change the active class to the selected card

// a querySelectorAll places everything into a node list, which is similar to an array
const panels = document.querySelectorAll('.panel');

// Next we need to loop through the node list
    // forEach() take in a function as an argument
panels.forEach((panel) => {
    // Have event listener for each panel
        // run function when click happens
    panel.addEventListener('click', () => {
        // Remove class of active
        removeActiveClasses();
        // Add class of active on whatever panel we click on
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    // Loop through all panels and remove active classes
        // An arrow function with one argument does not need full (())
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}
    // post image layout
    const postImageWrappers = document.querySelectorAll('.postImageWrapper');

    postImageWrappers.forEach(postImageWrapper => {
        // get child elements with the class 'postImage' inside each 'postImageWrapper'
        const postImages = postImageWrapper.querySelectorAll('.postImage');

        // check if there are at least 2 child elements
        if (postImages.length >= 2) {
            // apply styles to each 'postImage' element
            postImages.forEach(postImage => {
                postImage.style.width = '50%';
            });
        }
    });

    // change post body according to the tab
    const postDetailsTabButton = document.getElementsByClassName('postDetailsTabButton');
    const detailsTabText = document.getElementsByClassName('detailsTabText');
    const postMainTabButton = document.getElementsByClassName('postMainTabButton');
    const mainTabText = document.getElementsByClassName('mainTabText');
    const postDetailsSection = document.getElementsByClassName('postDetailsSection');
    const postMainSection = document.getElementsByClassName('postMainSection');

    // loop through each postDetailsTabButton and add an event listener
    for (let i = 0; i < postDetailsTabButton.length; i++) {
        postDetailsTabButton[i].addEventListener("click", function() {
            // call the tabChangeToPostDetails function with the index of the clicked button
            tabChangeToPostDetails(i);
        });
    }
import { annotate } from 'https://unpkg.com/rough-notation?module';

// store annotations in a map to keep track of them
const annotationMap = new Map();

    // function to handle tab change to post details
function tabChangeToPostDetails(index) {
    // change the style of the detailsTab as the focused one
    detailsTabText[index].classList.replace('shadow-tabUnfocused', 'shadow-tabFocused');
    postDetailsTabButton[index].classList.replace('bg-accent2BgColor', 'bg-accent1BgColor');
    postDetailsTabButton[index].classList.replace('text-accent2TextColor', 'accent1TextColor');
    postDetailsTabButton[index].classList.add('z-5');

    // change the style of the mainTab as the unfocused one
    mainTabText[index].classList.replace('shadow-tabFocused', 'shadow-tabUnfocused');
    postMainTabButton[index].classList.replace('bg-accent1BgColor', 'bg-accent2BgColor');
    postMainTabButton[index].classList.add('text-accent2TextColor');
    postMainTabButton[index].classList.remove('z-5');

    // hide the main section of the clicked button's post
    postMainSection[index].style.display = 'none';
    // show the details section of the clicked button's post
    postDetailsSection[index].style.display = 'block';

    // create and show annotations with rough notation for the visible content
    const visibleAnnotations = postDetailsSection[index].querySelectorAll('.underlinedLink');
    visibleAnnotations.forEach(link => {
        // check if the annotation has already been applied
        if (!annotationMap.has(link)) {
            const annotation = annotate(link, {
                type: 'underline',
                color: 'LightSalmon',
                strokeWidth: 3,
                padding: 1,
                animationDuration: 900,
                iterations: 2
            });
            annotation.show();

            // store the annotation object in the map
            annotationMap.set(link, annotation);
        }
    });
}

    // loop through each postMainContentTabButton and add an event listener
    for (let i = 0; i < postMainTabButton.length; i++) {
        postMainTabButton[i].addEventListener("click", function() {
            // call the tabChangeToMainSection function with the index of the clicked button
            tabChangeToMainSection(i);
        });
    }

// function to handle tab change to main section
function tabChangeToMainSection(index) {
    // change the style of the mainTab as the focused one
    mainTabText[index].classList.replace('shadow-tabUnfocused', 'shadow-tabFocused');
    postMainTabButton[index].classList.replace('bg-accent2BgColor', 'bg-accent1BgColor');
    postMainTabButton[index].classList.replace('text-accent2TextColor', 'accent1TextColor');
    postMainTabButton[index].classList.add('z-5');

    // change the style of the detailsTab as the unfocused one
    detailsTabText[index].classList.replace('shadow-tabFocused', 'shadow-tabUnfocused');
    postDetailsTabButton[index].classList.replace('bg-accent1BgColor', 'bg-accent2BgColor');
    postDetailsTabButton[index].classList.add('text-accent2TextColor');
    postDetailsTabButton[index].classList.remove('z-5');

    // show the main section of the clicked button's post
    postMainSection[index].style.display = 'block';
    // hide the details section of the clicked button's post
    postDetailsSection[index].style.display = 'none';

    // remove annotations when changing to main section to prevent duplicates
    const annotationsToRemove = postDetailsSection[index].querySelectorAll('.underlinedLink');
    annotationsToRemove.forEach(link => {
        const annotation = annotationMap.get(link);
        if (annotation) {
            annotation.hide(); // hide instead of remove
        }
        // Remove the annotation from the map
        annotationMap.delete(link);
    });
}

// sidebar tab change

const sidebarTextBox = document.getElementById('sidebarTextBox')
const sidebarSocialsSection = document.getElementById('sidebarSocialsSection')
const sidebarSocialsButton = document.getElementById('sidebarSocialsButton')

sidebarSocialsButton.addEventListener("click", function() {
    sidebarTextBox.style.display = "none";
    sidebarSocialsSection.style.display = "flex";
})
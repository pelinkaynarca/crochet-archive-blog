// post image layout  //FIX IT!!! Should be a function according to the children.
const postImages = document.querySelectorAll('.postImage');

if (postImages.length >= 2) {
    postImages.forEach(postImage => {
        postImage.style.width = '50%';
    });
}

// change post body according to the tab

const postDetailsTabButton = document.getElementsByClassName('postDetailsTabButton');
const detailsTabText = document.getElementsByClassName('detailsTabText');
const postContentTabButton = document.getElementsByClassName('postContentTabButton');
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

// function to handle tab change to post details
function tabChangeToPostDetails(index) {
    // change the style of the detailsTab as the focused one
    detailsTabText[index].classList.replace('shadow-tabUnfocused', 'shadow-tabFocused');

    postDetailsTabButton[index].classList.replace('bg-accent2BgColor','bg-accent1BgColor');

    postDetailsTabButton[index].classList.replace('text-accent2TextColor','accent1TextColor');

    postDetailsTabButton[index].classList.add('z-5');

    // change the style of the mainTab as the unfocused one
    mainTabText[index].classList.replace('shadow-tabFocused', 'shadow-tabUnfocused');

    postContentTabButton[index].classList.replace('bg-accent1BgColor','bg-accent2BgColor');

    postContentTabButton[index].classList.add('text-accent2TextColor');

    postContentTabButton[index].classList.remove('z-5');
    // hide the main section of the clicked button's post
    postMainSection[index].style.display = 'none';
    // show the details section of the clicked button's post
    postDetailsSection[index].style.display = 'block';
}

// loop through each postContentTabButton and add an event listener
for (let i = 0; i < postContentTabButton.length; i++) {
    postContentTabButton[i].addEventListener("click", function() {
        // call the tabChangeToMainSection function with the index of the clicked button
        tabChangeToMainSection(i);
    });
}

// function to handle tab change to main section
function tabChangeToMainSection(index) {
    // change the style of the mainTab as the focused one
    mainTabText[index].classList.replace('shadow-tabUnfocused', 'shadow-tabFocused');

    postContentTabButton[index].classList.replace('bg-accent2BgColor','bg-accent1BgColor');

    postContentTabButton[index].classList.replace('text-accent2TextColor','accent1TextColor');

    postContentTabButton[index].classList.add('z-5');

    // change the style of the detailsTab as the unfocused one
    detailsTabText[index].classList.replace('shadow-tabFocused', 'shadow-tabUnfocused');

    postDetailsTabButton[index].classList.replace('bg-accent1BgColor','bg-accent2BgColor');

    postDetailsTabButton[index].classList.add('text-accent2TextColor');

    postDetailsTabButton[index].classList.remove('z-5');
    // show the main section of the clicked button's post
    postMainSection[index].style.display = 'block';
    // hide the details section of the clicked button's post
    postDetailsSection[index].style.display = 'none';
}

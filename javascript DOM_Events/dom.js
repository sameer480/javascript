// Change Element Content by ID
//Create an HTML page with a paragraph element having the ID "greeting" and initial text "Hello, World!". Write JavaScript code to change the text to "Welcome to JavaScript!" using getElementById.
document.addEventListener("DOMContentLoaded", function() {
    const greetingElement= document.getElementById("greeting");
    if(greetingElement) {
        greetingElement.textContent = "Welcome to JavaScript!";
    }else{
        console.error("Element with ID 'greeting' not found.");
    }
}
);
//2. Access Elements by Tag Name
//Create an HTML page with three <li> elements containing different fruit names. Write JavaScript code to use getElementsByTagName to collect all <li> elements and print their text content to the console.
document.addEventListener("DOMContentLoaded", function() {
    const liElements = document.getElementsByTagName("li");
    if(liElements.length>0){
        for(let i=0;i<liElements.length;i++){
            console.log(liElements[i].textContent)
        }
    }
    else{
        console.error("No <li> elements found.");
    }
});
//3. Add Click Event Listener
//Create an HTML page with a button having the ID "clickMe". Write JavaScript code to add a click event listener using addEventListener that displays an alert saying "Button Clicked!" when the button is clicked.
document.addEventListener("DOMContentLoaded",function(){
    const button = documnet.getElementById("clickMe");
if(button){
    button.addEventListener("click",function(){
        alert("button clicked!");
    })
}
else{
    console.error("Button with ID 'clickMe' not found.");
}
});
//4. Modify Class Elements
//Create an HTML page with multiple <div> elements having the class "highlight". Write JavaScript code to use getElementsByClassName to change the background color of all these elements to yellow.
documnet.addEventListener("DOMContentLoaded",function(){
    const highlightElements= document.getElementsByClassName("highlight");
    if(highlightElements.length>0){
        for(let i=0;i<highlightElements.length;i++){
            highlightElements[i].style.backgroundColor = "yellow";
        }
    }else{
        console.error("No elements with class 'highlight' found.");
    }
});
//5. Use querySelector
//Create an HTML page with a <p> element having the class "intro". Write JavaScript code to use querySelector to select this element and change its text content to "Introduction Updated".
document.addEventListener("DOMContentLoaded", function(){
    const introElement = document.querySelector(".intro");
    if(introElement){
        introElement.textContent= "Introduction Updated";

    }else{
        console.error("Element with class 'intro' not found.");
    }
})
//6. Toggle Visibility with Click Event
//Create an HTML page with a button and a <div> with ID "content". Write JavaScript code to toggle the visibility of the <div> (using style.display) when the button is clicked.
document.addEventListener("DOMContentLoaded",function(){
    const toggleButton = documnet.getElementById("toggleButton");
    const contentDiv = document.getElementById("content");
    if(toggleButton && contentDiv){
        toggleButton.addEventListener("click",function(){
            if(contentDiv.style.display === "none" || contentDiv.style.display === ""){
                contentDiv.style.display = "block";
            } else {
                contentDiv.style.display = "none";
            }
        })
    }
})
//7. Count Elements by Selector
//Create an HTML page with multiple <span> elements having the class "note". Write JavaScript code to use querySelectorAll to count and display the number of these elements in an alert.
document.addEventListener("DOMContentLoaded",function(){
    const noteElements= this.documentElement.querySelectorAll(".note");
    if(noteElements.length > 0){
        alert(`Number of elements with class 'note': ${noteElements.length}`);
    } else {
        console.error("No elements with class 'note' found.");
    }
})
//8. Log Scroll Position
//Create an HTML page with a scrollable <div> (set height and overflow: auto). Write JavaScript code to use the onscroll event to log the scroll position (scrollTop) to the console whenever the div is scrolled.
document.addEventListener("DOMContentLoaded", function() {
    const scrollableDiv = document.getElementById("scrollableDiv");
    if (scrollableDiv) {
        scrollableDiv.onscroll = function() {
            console.log(`Scroll position: ${scrollableDiv.scrollTop}`);
        };
    } else {
        console.error("Scrollable div with ID 'scrollableDiv' not found.");
    }
}
);
//9. Change Text on Mouse Enter
//Create an HTML page with a <div> having the ID "hoverArea". Write JavaScript code to use the onmouseenter event to change the div’s text to "Mouse Entered!" when the mouse hovers over it.
document.addEventListener("DOMContentLoaded",function(){
    const hoverArea= documnet.getElementById("hoverArea");
    if(hoverArea){
        hoverArea.onmouseEnter= function() {
            hoverArea.textContent = "Mouse Entered!";
        }
    }
});
//10. Keypress Event Logger
//Create an HTML page with an <input> element. Write JavaScript code to use the onkeypress event to log the ASCII code of the pressed key to the console.
document.addEventListener("DOMContentLoaded", function() {
    const inputElement = document.querySelector("input");
    if (inputElement) {
        inputElement.onkeypress = function(event) {
            console.log(`Key pressed: ${event.key}, ASCII code: ${event.charCode}`);
        };
    } else {
        console.error("Input element not found.");
    }
});
//11. Dynamic Element Creation
//Create an HTML page with a button. Write JavaScript code to use document.createElement to create a new <p> element with text "New Paragraph" and append it to the <body> when the button is clicked. 
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("button");
    if (button) {
        button.addEventListener("click", function() {
            const newParagraph = document.createElement("p");// creating a new paragraph element
            newParagraph.textContent = "New Paragraph"; // setting the text content of the new paragraph
            document.body.appendChild(newParagraph);// appending the new paragraph to the body
        });
    } else {
        console.error("Button not found.");
    }
});
//12. Event Bubbling Demonstration
//Create an HTML page with a nested structure: a <div> (ID "outer") containing a <div> (ID "inner") containing a button. Write JavaScript code to add click event listeners to all three elements, logging their IDs to the console. Demonstrate event bubbling by showing the order of logs when the button is clicked.
document.addEventListener("DOMContentLoaded", function() {
    const outerDiv = document.getElementById("outer");
    const innerDiv = document.getElementById("inner");
    const button = document.querySelector("button");

    if (outerDiv && innerDiv && button) {
        outerDiv.addEventListener("click", function() {
            console.log("Outer Div Clicked");
        });

        innerDiv.addEventListener("click", function() {
            console.log("Inner Div Clicked");
        });

        button.addEventListener("click", function(event) {
            console.log("Button Clicked");
            event.stopPropagation(); // Prevents the event from bubbling up to the parent elements
        });
    } else {
        console.error("One or more elements not found.");
    }
});
//13. Strict Mode Enforcement
//Create an HTML page with a button. Write a JavaScript function in strict mode that attempts to declare two parameters with the same name (e.g., function sum(a, a)). Add a click event to the button to call this function and demonstrate that it throws a SyntaxError.
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("button");
    if (button) {
        button.addEventListener("click", function() {
            "use strict"; // Enforcing strict mode
            try {
                function sum(a, a) { // This will throw a SyntaxError in strict mode
                    return a + a;
                }
                sum(5, 10); // Attempting to call the function
            } catch (error) {
                console.error("Error:", error.message); // Catching and logging the error
            }
        });
    } else {
        console.error("Button not found.");
    }
});
//14. Keydown Counter
//Create an HTML page with a <div> (ID "counter") and an <input> element. Write JavaScript code to use the onkeydown event to count key presses and display the count in the div.
document.addEventListener("DOMContentLoaded",function(){
    const counter= document.getElementById("counter");
    const inputElement = document.querySelector("input");
    let keyPressCount = 0;
    if(counter && inputElement){
        inputElement.onkeydown= function(){
            keyPressCount++;
            counter.textContent = `Key Press Count: ${keyPressCount}`;
        }
    }
});
//15. Stop Event Propagation
//Create an HTML page with a <div> (ID "parent") containing a button (ID "child"). Add click event listeners to both elements that log their IDs. Write JavaScript code to use stopPropagation on the button’s click event to prevent the parent’s event from firing.
document.addEventListener("DOMContentLoaded", function() {
    const parentDiv = document.getElementById("parent");
    const childButton = document.getElementById("child");

    if (parentDiv && childButton) {
        parentDiv.addEventListener("click", function() {
            console.log("Parent Div Clicked");
        });

        childButton.addEventListener("click", function(event) {
            console.log("Child Button Clicked");
            event.stopPropagation(); // Prevents the event from bubbling up to the parent
        });
    } else {
        console.error("One or more elements not found.");
    }
});
//16. Dynamic Class Toggle
//Create an HTML page with multiple <p> elements having the class "toggleable". Write JavaScript code to use querySelectorAll and a click event listener on a button to toggle a class "active" (define CSS to change background color) on all these elements.
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector("button");
    const toggleableElements = document.querySelectorAll(".toggleable");
    if (toggleButton && toggleableElements.length > 0) {
        toggleButton.addEventListener("click", function() {
            toggleableElements.forEach(function(element) {
                element.classList.toggle("active"); // Toggles the 'active' class on each element
            });
        });
    } else {
        console.error("Toggle button or toggleable elements not found.");
    }
});
//17. Mouse Movement Tracker
//Create an HTML page with a <div> (ID "trackArea"). Write JavaScript code to use the onmousemove event to update the div’s text with the current mouse coordinates (event.clientX, event.clientY) inside the div.
document.addEventListener("DOMContentLoaded", function() {
    const trackArea = document.getElementById("trackArea");
    if (trackArea) {
        trackArea.onmousemove = function(event) {
            trackArea.textContent = `Mouse Coordinates: (${event.clientX}, ${event.clientY})`;
        };
    } else {
        console.error("Track area with ID 'trackArea' not found.");
    }
});
//18. Prevent Multiple Event Handlers
//Create an HTML page with a button. Write JavaScript code to demonstrate the limitation of onclick by assigning two different handlers to the same button, showing only the last one executes. Then, use addEventListener to attach both handlers so both execute on click.
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("button");
    if (button) {
        // Using onclick, only the last handler will execute
        button.onclick = function() {
            console.log("First Handler Executed");
        };
        button.onclick = function() {
            console.log("Second Handler Executed"); // This will override the first handler
        };

        // Using addEventListener to attach both handlers
        button.addEventListener("click", function() {
            console.log("First Handler with addEventListener Executed");
        });
        button.addEventListener("click", function() {
            console.log("Second Handler with addEventListener Executed");
        });
    } else {
        console.error("Button not found.");
    }
});
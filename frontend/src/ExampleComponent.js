import React from 'react'

// Use props to pass arguments into the function, they should be in the form of an object
// If none are needed, feel free to remove the props parameter
function ExampleComponent(props) {

    // The component needs to return HTML/JSX, and there needs to be one parent element
    // That element here is a classless div, but it can be anything
    return (
        <div>
            Whatever is in here is what gets displayed!
            {/* Use curly braces to use javascript code
             Just like the component itself, any elements inside here will need a single parent element
             If you put an element inside the curly braces that also needs javascript, it will need its own internal curly braces like so...
             <button name="test" onClick={event => console.log(event.target.name)} />
             Finally, JSX doesn't like normal for loops or if statements, use Higher Order functions like map for loops, and use the ternary operator for if */}
        </div>
    )
}

export default ExampleComponent
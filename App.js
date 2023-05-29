/*
What is CrossOrigin? 
    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. 
What is CDN?

*/

// This is the react file

let heading3 = React.createElement('h1', { id: "heading" }, "Hello World from React!!");
//  creating an element is the core job of react. But when we want to inject/render it to webpage it inclued dom manipulation so we use react Dom
// Now heading3 is an react element. React element is nothing but a simple JS object
console.log(heading3);  // will return an object
// now select an element where we want to render this react code

let root3 = ReactDOM.createRoot(document.getElementById('root'));
// here we made an html element with id root as the root elemet for React code injection. So all the react code is now injected in this element. SO by this technique we can actually write partial part of our web site in react

// root3.render(heading3);  // this render method will convert that object in to the h1 tag and render it to root element

//--------------------------------------------------------------------------------------------------------------
// How to make nested elements, sibling elements?
// React.createElement has third argument which takes children. If we want to make nested elements pass the children element here

// let heading4 = React.createElement('div', { id: "parent" },
//   React.createElement('div', { id: "child" },
//     React.createElement('h1', { id: "child_h1" }, "Hii!!, I am H1 tag of child")
//   )
// )
//------------------------------------------------------------------------------------------------------------------
// If we want to add sibling elements then use array of elements that needs to be passed as third argument

let heading4 = React.createElement('div', { id: "parent" },
  [
    React.createElement('div', { id: "child1" },
      [
        React.createElement('h1', { id: "child1_h1" }, "Hii!!, I am H1 tag of child1"),
        React.createElement('h2', { id: "child1_h2" }, "Hii!!, I am H2 tag of child1")
      ]
    ),
    React.createElement('div', { id: "child2" },
      [
        React.createElement('h1', { id: "child2_h1" }, "Hii!!, I am H1 tag of child2"),
        React.createElement('h2', { id: "child2_h2" }, "Hii!!, I am H2 tag of child2")
      ]
    ),
  ]
)

//------------------------------------------------------------------------------------------------------------------

root3.render(heading4)
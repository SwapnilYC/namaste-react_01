/*
What is CrossOrigin? 
    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. 
What is CDN?

*/

// This is the react file

let heading3 = React.createElement('h1', {}, "Hello World from React!!");
//  creating an element is the core job of react. But when we want to inject/render it to webpage it inclued dom manipulation so we use react Dom

// now select an element where we want to render this react code

let root3 = ReactDOM.createRoot(document.getElementById('root'));
// here we made an html element with id root as the root elemet for React code injection. So all the react code is now injected in this element. SO by this technique we can actually write partial part of our web site in react

root3.render(heading3);

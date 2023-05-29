01) What is Emmet?
Emmet uses different abbreviations and short expressions depending on what's passed, and then dynamically converts the abbreviations into the full code.

02) What are the difference bet Framework and a library?
Both libraries and frameworks are reusable code written by someone else. The technical difference between a framework and a library lies in a term called inversion of control.
When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.

03) What is CDN? Why do we use it?
A CDN improves efficiency by introducing intermediary servers between the client and the website server. These CDN servers manage some of the client-server communications. They decrease web traffic to the web server, reduce bandwidth consumption, and improve the user experience of your applications.When a user visits a website, data from that website's server has to travel across the internet to reach the user's computer. If the user is located far from that server, it will take a long time to load a large file, such as a video or website image. Instead, the website content is stored on CDN servers geographically closer to the users and reaches their computers much faster.
https://aws.amazon.com/whatis/cdn/#:~:text=A%20CDN%20improves%20efficiency%20by,user%20experience%20of%20your%20applications.

04) Why React is called React?
And it's called React because it reacts. It was developed by Facebook (a site that CONSTANTLY updates its data) to improve the user interface development and more effectively change (REACT to) what the user sees when they're doing things like mouse clicking, submitting and typing.

05) What is crossorigin in script tag?
The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.
https://www.w3schools.com/tags/att_script_crossorigin.asp#:~:text=The%20crossorigin%20attribute%20sets%20the,or%20scripts)%20from%20another%20domain.

06) What is the difference bet React and ReactDOM?
The react package holds the react source for components, state, props and all the code that is react.
The react-dom package as the name implies is the glue between React and the DOM. Often, you will only use it for one single thing: mounting your application to the index.html file with ReactDOM.render().

07) Why there are two separate files of react and reactDOM?
The reason React and ReactDOM were split into two libraries was due to the arrival of React Native (A react platform for mobile development). React components are such a great way to organize UI that it has now spread to mobile. React is used on the web and on mobile. react-dom is used only in web apps.

08) What is the difference between react.development.js and react.production.js via CDN?
The production version will be optimized in a few ways--smaller file size by minimizing variable names and removing white space, etc--whereas the development version will remain readable, might include source maps, etc., making it better for debugging and development usage. Functionally they're the same.

09) What are async and defer?
The async and defer attributes both allow the browser to continue parsing the HTML document while JavaScript files are being downloaded, but they differ in when those files are executed.
Async downloads and executes JavaScript as soon as it’s available, while defer attribute waits until the HTML document has been parsed before downloading and executing any external scripts.
So async does not guarantee of code execution in order while defer does. So where the order of execution is imp use defer
https://www.youtube.com/watch?v=IrHmpdORLu8
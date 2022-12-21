import React from 'react';

const Blogs = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="divide-y divide-gray-700">
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5"> What are the different ways to manage a state in a React application?</h3>
                        <p className="md:pl-0 md:col-span-7">Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.The built-in way that React provides for setting component states is by using setState and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">How does prototypical inheritance work?</h3>
                        <p className="md:pl-0 md:col-span-7"> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">What is a unit test? Why should we write unit tests?</h3>
                        <p className="md:pl-0 md:col-span-7">The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">React vs. Angular vs. Vue?</h3>
                        <p className="md:pl-0 md:col-span-7">AngularJS is an open-source platform developed by Google, while ReactJS is an open-source library developed by Facebook.Angular JS is a TypeScript-based web application framework, whereas React JS is a JavaScript-based library.While talking about React JS vs Angular, Angular is a JS framework built using TypeScript, whereas React JS is a JS library built using JSX.Angular is a part of the MEAN stack and is very compatible with many code editors. It’s also considered to develop dynamic websites and web apps. On the other hand, React is widely used to develop reusable HTML elements for front end development.</p>
                    </div>
                </div>
            </div>
            <hr />
        </section>


    );
};

export default Blogs;
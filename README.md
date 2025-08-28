1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: GetElementById selects a specific element. GetElementsByClassName selects all classes with the same name, which gives an HTML collection. QuerySelector returns the first element selected. And querySelectorAll returns all selected elements.

2. How do you create and insert a new element into the DOM?
Answer: First, you need to create the required Tag using document.createElement. Then, you need to set its InnerText or innerHTML as required. Then, It has to be added to the parent element.

3. What is Event Bubbling and how does it work?
Answer: Event Bubbling first the child element triggers the event, then it automatically goes to its parent.

4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation In JavaScript, a parent element handles the events of its child elements.

5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault Stops the default behavior of the Element.
stopPropagation Stops the bubbling or capturing of the Event, preventing it from going to the parent element.
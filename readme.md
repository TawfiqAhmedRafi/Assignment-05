1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
 Ans : getElementById only works with Id and it has a return type of single element or null if not found .It is the fastest method  to grab a single element . As for getElementsByClassName , it works for all elements with a class name , it returns a HTML collection which is an array type but not an actual array . And as for querySelector/ querySelectorAll works  for all elements matching a css selector . 

 2.How do you create and insert a new element into the DOM?
 Ans :
  const newElement = document.createElement("p");
  newElement.textContent = "Hello! ";
  document.body.append(newElement); 

3.What is Event Bubbling and how does it work?
Ans : Event bubbling is the process by which an event that happens on one element first executes on that element and then, unless it is halted along the way, automatically propagates upward through its parent elements until it reaches the top of the DOM tree.
 
4.What is Event Delegation in JavaScript? Why is it useful?
Ans : In JavaScript, event delegation is a technique where you connect a single event listener to their common parent and allow event bubbling take care of the rest, rather than attaching event listeners to numerous separate child elements.  The parent can "catch" events that are caused by its children and react according to which kid was clicked or interacted with because events bubble up through the DOM. It's helpful since it keeps your code clearer and easier to maintain, works automatically for dynamically inserted items (you don't have to re-attach listeners), and increases code efficiency (fewer event listeners in memory).

5.What is the difference between preventDefault() and stopPropagation() methods?
Ans : 
preventDefault() stops the browser’s default action for an event.
stopPropagation() stops the event from spreading to parent elements.
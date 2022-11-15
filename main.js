console.log("Hello, World!");
let h1array = document.getElementsByTagName("h1");
console.log(h1array[0]);

h1array[0].innerHTML = "Lab12 Assignment";
h1array[0].style.color = "blue";

let hr = document.createElement("hr");
document.body.appendChild(hr);

let h2 = document.createElement("h2");
h2.innerHTML = "Task";
h2.style.color = "red";
document.body.appendChild(h2);

let pg1 = document.createElement("p");
pg1.innerHTML = "In this task you have to reproduce this HTML page as is using <strong> only </strong> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.appendChild(pg1);

let content1 = [
	"find elements in the DOM (<strong>5 points</strong>);",
	"create/add/remove elements (<strong>5 points</strong>);",
	"change content of the elements (<strong>5 points</strong>);",
	"change styles of the elements (<strong>5 points</strong>);",
	"change attributes of the elements (<strong>5 points</strong>);",
	"change classes of the elements (<strong>5 points</strong>)."
]

for (let i=0; i<content1.length; i++) {
	let n = i%2;
    var list1 = document.createElement("li");
	if (n==0) {
		list1.innerHTML = content1[i];
		list1.style.color = "green"
		document.body.appendChild(list1);
	}
	else {
		list1.innerHTML = content1[i];
		list1.style.color = "purple"
		document.body.appendChild(list1);
	}
}

let a1 = document.createElement("a");
a1.setAttribute("href", "https://github.com/yessen/nu_web_programming/tree/main/week12");
a1.innerText = "link.";

let pr2 = document.createElement("p");
pr2.innerText = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this "
pr2.appendChild(a1);
document.body.appendChild(pr2);

let hr2 = document.createElement("hr");
document.body.appendChild(hr2);

let h3 = document.createElement("h2");
h3.innerHTML = "Submission";
h3.style.color = "red";
document.body.appendChild(h3);

let pr3 = document.createElement("p");
pr3.innerHTML = "To submit your work, follow these instructions:"
document.body.appendChild(pr3);

let content2 = [
	"Create a new repository on Github, named <strong>lab12</strong> (<strong>1 point</strong>).",
	"Clone this repository to your local machine and work inside it.",
	"Create a new HTML file, called <strong>index.html</strong>, which has only tag one &lt;h1&gt; tag with \"Hello, World!\" message (<strong>1 point</strong>).",
	"Create a new JavaScript file, called <strong>main.js</strong>, which must contain your program (assignment) described above (<strong>1 point</strong>).",
	"Link this <strong>main.js</strong> file to your <strong>index.html</strong> file (Note: place your script at the end of the <strong>body</strong> section).",
	"Write a JavaScript program in <strong>main.js</strong> to make your <strong>index.html</strong> look identical to this HTML file (<strong>5 points</strong>).",
	"After you finish your work, submit it to the Github (<strong>2 points</strong>)."
]

for (let i=0; i<content2.length; i++) {
	let m = i%2;
    var list2 = document.createElement("li");
	if (m==0) {
		list2.innerHTML = content2[i];
		list2.style.color = "green"
		document.body.appendChild(list2);
	}
	else {
		list2.innerHTML = content2[i];
		list2.style.color = "purple"
		document.body.appendChild(list2);
	}
}

let class1 = document.createElement("div");
class1.className = "initialclass";
console.log(class1.classList);
class1.classList.add("div");
console.log(class1.classList);
class1.classList.remove("div");
console.log(class1.classList);

let hr3 = document.createElement("hr");
document.body.appendChild(hr3);
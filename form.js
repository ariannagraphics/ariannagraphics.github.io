var x = document.getElementByID("form_sample")
var createform = document.createElement('form'); // Create New Element Form
createform.setAttribute("action",""); // Setting Action Attribute on Form
createform.setAttribute("method", "post") //Setting Method Attribute
x. appendChild(createform);

var heading = document.createElement('h2');
heading.innerHTML = "Contact Form ";
createform.appendchild(heading);

var line = document.createElement ('hr')
createform.appendChild(line)

var linebreak = document.createElement('label')
namelabel.innerHTML = " Your Name : ";
createform.appendChild(namelabel);

var inputeelement = document.createElement('input');
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel = document.createElement('label'); // Create Label for E-mail Field
emaillabel.innerHTML = "Your Email : ";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); // Create Input Field for E-mail
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "demail");
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var messagelabel = document.createElement('label'); // Append Textarea
messagelabel.innerHTML = "Your Message : ";
createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "dmessage");
createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('input'); // Append Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);

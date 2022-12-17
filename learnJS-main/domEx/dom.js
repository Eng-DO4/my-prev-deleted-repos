/* Document Object Model
 * document.creatElement('element')
 * document.querySelector('elem')   document.querySelectorAll('elem')
 * document.getElementById('id')   document.getElementsByTagName('elem')   document.getElementsByClassName('class')
 * document.body.appendChild(elem .class #id elemInVar)
 * elemInVar.setAttribute('prop','val')   elemInVar.innerText = ""
 * elemInVar.value
 * document.addEventListener('event', func(){})   elemInVar.addEventListener('event', func(){})
 * document.removeEventListener('event',func(){})   elemInVar.removeEventListener('event', func(){})
 * parent.appendChild(childInVar)   parentInVar.removeChild(childInVar)
 * elemInVar.parentElement.removeChild(elemInvar)   elemInVar.remove()
 * the difference between .firstChild and .firstElementChild, is that .firstElementChild will always return the first element, while .firstChild might return whitespace (if there is any) to preserve the formatting of the underlying HTML source code.
 * elemInVar.style.prop = 'val'   [{(do not use -, use camelCase)}]
 * elemInVar.style.cssText = 'prop1: val; prop2: val; ...'   use pure CSS
 * elemInVar.setAttribute('attrib', 'val')   in general
 * elemInVar.setAttribute('style', 'prop: val1; prop2: val2; ...')   for styling
 * elemInVar.className   elemInVar.classList
 * elemInVar.classList.add() to add a class to the list
 * elemInVar.classList.remove() to remove a class from the list
 * elemInVar.classList.toggle() to add the class if it doesn't exists or remove it from the list if it does already exist
 * elemInVar.classList.contains() returns a boolean based on if the class exists in the list or not
 * monitorEvents(document)   unmonitorEvents(document)
 * Phases of Events -capturing -targeting -bubbling   ?????
 * evt.preventDefault()   ?????
 */

// var h1 = document.createElement('h1');
// h1.innerText = "Type into the input to make this text change";
// var input = document.createElement('input');
// input.setAttribute('type', 'text');
// document.body.innerText = '';
// document.body.appendChild(h1);
// document.body.appendChild(input);
// input.addEventListener('change', function(){
//	h1.innerText = input.value
// });

const h1 = document.querySelector('h1');
const arr = ['Example Domain','First Click','Second Click','Third Click'];
function handleClicks(){
	switch(h1.innerText){
		case arr[0]:
			h1.innerText = arr[1];
			break
		case arr[1]:
			h1.innerText = arr[2];
			break
		case arr[2]:
			h1.innerText = arr[3];
			break
		default:
			h1.innerText = arr[0];
	}
}
h1.addEventListener('click',handleClicks());

const input = document.body.querySelector('input')
const tag = document.querySelector('.tag-container');
const tagText = document.querySelector('.tag-text');
const test = document.querySelector('.test');

// Press Enter to create tag 
function addTag(e){
    if (tagText.value === '') {
        return alert("Enter text to create a tag");
    }
    else if (e.keyCode == 13) {
        const button = document.createElement('button'); 
        button.classList.add('btn');
        button.innerText= tagText.value.toUpperCase();

        const cross = document.createElement('span');
        cross.classList.add('delete');
        cross.innerText = "  X";

        button.appendChild(cross);
        test.appendChild(button);
        tagText.value='';
    }
};

//Remove Function to eleminating Tags
function remove(e) {
	if (e.target.classList.contains('delete')) {
      test.removeChild(e.target.parentNode);
      return;
    }
}

// Event Listener for add && Remove
input.addEventListener('keyup', addTag)
tag.addEventListener('click', remove)
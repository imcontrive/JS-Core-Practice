// 1. Select the element with an id of `demo` and apply style `1px solid purple` on that.

var element = document.querySelector('#demo');
element.style.border = "1px solid purple";

//2. Select all the elements by class name of `demo` and apply the style `1px solid orange` to each element.

var elements = document.querySelectorAll('.demo');
elements.forEach(element => {
  element.style.border = "1px solid orange";
});
/* 3. Select all the elements by tag name of `article` and apply this style `1px solid blue`.*/

var tags = document.getElementsByTagName('article');
for (i = 0; i < tags.length; i++) {
  tags[i].style.border = '1px solid blue';
}

//4. Select the element by id of `demo-query` using querySelector and apply style of `1px solid grey`.

var demoQueries = document.querySelector('#demo-query');
demoQueries.style.border = "1px solid grey";

/*5.Select the element by class of `demo-query-all` using querySelectorAll and apply style of `1px solid green`.*/

var demoQueriesAll = document.querySelectorAll('.demo-query-all');
demoQueriesAll.forEach(query => {
  query.style.border = '1px solid green';
});

/**
 * var tags = document.getElementsByTagName('article');

for (i = 0; i < tags.length; i++) {
  tags[i].style.border = '1px solid blue';
}
"1px solid blue"
var elements = document.querySelectorAll('.demo');
elements.forEach(element => {
  element.style.border = "1px solid orange";
});
undefined
var element = document.querySelector('#demo');
element.style.border = "1px solid purple";
"1px solid purple"

var demoQueries = document.querySelector('#demo-query');
demoQueries.style.border = "1px solid grey";
"1px solid grey"
var demoQueriesAll = document.querySelectorAll('.demo-query-all');
demoQueriesAll.forEach(query => {
  query.style.border = '1px solid green';
});
undefined
 */
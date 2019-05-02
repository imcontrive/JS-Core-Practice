#The Ultimate Guide to Understanding Local Storage
Local Storage Vs Session Storage Vs Cookies, how to use it on websites & what's the basic differences between them.
Credit:{https://businessstudent.scdn5.secure.raxcdn.com/wp-content/uploads/2017/04/computer-science.jpg}.Prerequisites
Basic knowledge of HTML and CSS.
Basic knowledge of JavaScript syntax and dataTypes .

Local Storage :- " LocalStorage is a type of web storage that allows you to access a local Storage object and to store the data in the browser with no expiration date. This means the data stored in the browser will persist even after the browser window has been closed.
LocalStorage has following methods namely:
getItem()
LocalStorage.getItem() :Retrieve a value by the key from LocalStorage that means when you passed a key name will return the key's Value if the key exist in storage object.
setItem()
LocalStorage.setItem() : this method sets the value of the specified Storage Object item.that means Add key and value to LocalStorage or update that key's value if it already exists.
SYNTAX-  localStorage.setItem(keyname, value)
removeItem()
LocalStorage.removeItem() : this method are used to Remove an item by key from the storage.
SYNTAX- storage.removeItem(keyName);
clear()
LocalStorage.clear(): Clear all LocalStorage
key()
key(): Passed a number to retrieve nth key of a LocalStorage that means "The key() method used in this situations where you need to loop through keys and allows you pass a number or index to local storage to retrieve the name of the key.
SYNTAX- var KeyName = LocalStorage.key(index);
SessionStorage
the localStorage property allows you to access a local Storage object. localStorage is similar to sessionStorage. The only difference is that, while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the browsing session ends - that is, when the browser is closed."
Differences between localStorage and sessionStorageregarding lifetime:
Data stored through localStorage is permanent: it does not expire and remains stored on the user's computer until a web app deletes it or the user asks the browser to delete it.
sessionStorage has the same lifetime as the top-level window or browser tab in which the data got stored. When the tab is permanently closed, any data stored through sessionStorage is deleted.

Differences between localStorage and sessionStorageregarding storage scope: Both forms of storage are scoped to the document origin so that documents with different origins will never share the stored objects.
sessionStorage is also scoped on a per-window basis. Two browser tabs with documents from the same origin have separate sessionStorage data.
Unlike in localStorage, the same scripts from the same origin can't access each other's sessionStorage when opened in different tabs.
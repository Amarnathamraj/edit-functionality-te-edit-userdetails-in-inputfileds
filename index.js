// Write your code below:
function handleFormSubmit(event){
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
 const newLi = document.createElement('li');
  // Corrected code
newLi.innerHTML = username + ' - ' + email + ' - ' + phone +
    '<button class="delete-btn">delete</button>' +
    '<button class="edit-btn">Edit</button>';

 const userList = document.querySelector('#userList');
    userList.appendChild(newLi);
  const obj = {
        username: username,
        email: email,
        phone: phone
    };
 const newobj = JSON.stringify(obj);
 localStorage.setItem(email, newobj);
  //adding delete button to remove items from list and local storage
   const deleteButton = newLi.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function() {
        // Remove the user's details from local storage
        localStorage.removeItem(email);
        // Remove the entire list item from the user list
        userList.removeChild(newLi);
      });
 // addin edit button so that u can remove existing details from list 
  //and display on input fileds
   const editButton = newLi.querySelector('.edit-btn');
    editButton.addEventListener('click', function() {
        localStorage.removeItem(email);
        userList.removeChild(newLi);
        document.querySelector('#username').value = obj.username;
        document.querySelector('#email').value = obj.email;
        document.querySelector('#phone').value = obj.phone;
    });
}
module.exports = handleFormSubmit;

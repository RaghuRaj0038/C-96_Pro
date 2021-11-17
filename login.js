function addUser()
{
    user_name = document.getElementById("userName").value;
    localStorage.setItem("userName", userName);
    window.location = "Chat_room.html";
}
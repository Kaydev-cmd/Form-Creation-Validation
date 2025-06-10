async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    dataContainer.innerHTML = "";
    const userList = document.createElement("ul");

    users.forEach((user) => {
      const liElement = document.createElement("li");
      liElement.textContent = user.name;
      userList.append(liElement);
    });
    dataContainer.append(userList);
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", fetchUserData);

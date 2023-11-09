let api = "https://jsonplaceholder.typicode.com/users";

const getData = async () => {
  let result = await fetch(api);
  result = await result.json();
  console.log(result);
  document.getElementById("userdata").innerHTML = result
    .map((item) => {
      return `<tr>
<td>${item.name}</td>
<td>${item.email}</td>
<td>${item.username}</td>
</tr>`;
    })
    .join("");
};
getData();

const loadUser = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displayUser(data.results[0]));
}
function displayUser(user) {
    
    const displaySection = document.getElementById('randomUser');
    const div = document.createElement('div');
    displaySection.textContent='';
    div.innerHTML = `
    <img src="${user.picture.large}" class="rounded mx-auto d-block" >
    <div class="card mx-auto" style="width: 500px">
  <div class="card-body mt-2">
    <h5 class="card-title">Name: ${user.name.title} ${user.name.first} ${user.name.last}</h5>
    <p class="card-text"><span class="fw-bold">Address:</span> ${user.location.street.number} ${user.location.street.name}, <span class="fw-bold">City:</span> ${user.location.city}, <span class="fw-bold">State:</span> ${user.location.state} </p>
    <p> <span class="fw-bold">Time-Zone:</span> ${user.dob.date}</p>
    <p> <span class="fw-bold">Phone:</span> ${user.phone}</p>
    <p> <span class="fw-bold">Email:</span> ${user.email}</p>

    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

    `
    displaySection.appendChild(div);
}
const app = document.getElementById("root");

var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://sheet.best/api/sheets/0460c105-5024-4156-9308-3d258b43d10c",
  true
);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach((student) => {
      const card = document.createElement("div");
      card.classList.add("student__container");

      card.innerHTML = `
        <div class="image"></div>
        <div class="student__info">
        <p class="student__name" id="name"> ${student.fullname} </p>
        <span>ID:${student.student_id}</span>
        </div>
        <div class="percentage">
        <p class="big-text" id="percentage">${student.attendance}</p>
        <span>Overall percentage</span>
        </div>
    `;
      root.appendChild(card);
    });
  }
};

request.send();

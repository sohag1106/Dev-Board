const ApiCalling = async () => {
  await fetch("main.json")
    .then((res) => res.json())
    .then((data) => {
      data.map((item) => {
        AssignJson(item);
        console.log(item);
      });
    });
};
ApiCalling();

const AssignJson = (item) => {
  const { company, deadline, description, id, status, task } = item;
  const taskBody = document.getElementById("taskBody");
  const taskCard = document.createElement("div");
  taskCard.innerHTML = `    
    <div class="flex gap-6 flex-col bg-[#e9eefa] p-[0.5rem] rounded-lg max-w-[30rem] w-full">
        <div>
            <span class="font-[400] p-2 bg-white px-4 py-2 rounded-[0.5rem] inline-block">${company}</span>
        </div>
        <h4 class="text-[1.5rem] font-[500] line-clamp-1">${task}</h4>
        <span class="p-4 font-[400] overflow-hidden opacity-[.5] bg-white rounded-[1rem]  pb-[1rem]">
            ${description}
        </span>
        <hr class="border-dashed border-[0.5] my-[1rem]">
        <div class="flex justify-between items-center">
            <div>
                <span class="text-sm text-gray-400">Deadline</span>
                <p class="font-[500] text-gray-700">${deadline}</p>
            </div>
            <div>
                <button 
                id="${id}" 
                task="${task}"
                onclick="disabledBtn(this)" 
                class="bg-[#3752fd] px-5 py-3 rounded-[0.5rem] cursor-pointer text-white ${status}">
                    ${status}
                </button>
            </div>
        </div>
    </div>
  `;

  taskBody.appendChild(taskCard);
};

let employeeTask = 0;
const disabledBtn = (taskId) => {
  const add = document.getElementById("add");
  const Append = document.createElement("div");

  const spanCreate = document.createElement("p");
  const task = taskId.getAttribute("task");
  spanCreate.innerHTML = `<p>You have completed the task ${task}</p>`;

  Append.appendChild(spanCreate);

  const realTime = () => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const realTimeZone = `${hours}:${minutes}:${seconds}`;

    const realTimeSpan = document.createElement("p");
    realTimeSpan.innerHTML = `<p>at ${realTimeZone} PM</p>`;

    Append.appendChild(realTimeSpan);
    add.appendChild(Append);
  };
  realTime();

  const btn = document.getElementById(`${taskId.id}`);
  btn.disabled = true;
  btn.style.opacity = "0.2";
  btn.style.cursor = "not-allowed";

  const removeBtn = document.getElementById("removeBtn");
  removeBtn.addEventListener("click", () => {
    add.removeChild(Append);
    const increment = document.getElementById("increment");
    increment.innerHTML = Number(increment.innerHTML) - 1;
    const decrement = document.getElementById("decrement");
    decrement.innerHTML = Number(decrement.innerHTML) + 1;
    const btn = document.getElementById(`${taskId.id}`);
    btn.disabled = false;
    btn.style.opacity = "1";
  });

  const decrement = document.getElementById("decrement");
  decrement.innerHTML = parseInt(decrement.innerHTML) - 1;

  const increment = document.getElementById("increment");
  increment.innerHTML = parseInt(increment.innerHTML) + 1;

  alert("Board updated successfully");
  employeeTask++;
  if (employeeTask === 6) {
    alert("Congrats! You have completed all the tasks");
  }
};

const realDate = document.getElementById("realDate");
const localDate = () => {
  const date = new Date();
  const day = date.getDate();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  realDate.innerHTML = `${month} ${day}, ${year}`;
};
localDate();

const today = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const fullDayName = daysOfWeek[today.getDay()];
const realDateElement = document.getElementById("realDate1");
realDateElement.textContent = `${fullDayName}`;

const randomColor = document.getElementById("randomColor");
const body = document.querySelector("body");

randomColor.addEventListener("click", function () {
  const RandomColor = Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor = "#" + RandomColor;
});

const Discover = document.getElementById("Discover");
Discover.addEventListener("click", function () {
  console.log("hello");
  window.location.href = "question.html";
});

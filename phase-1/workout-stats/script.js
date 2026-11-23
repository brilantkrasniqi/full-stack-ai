async function getWorkouts() {
  try {
    const response = await fetch("workouts.json");
    if (!response.ok) {
      throw new Error("Response is not OK");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}

const sessions = await getWorkouts();
let currentSession = await getWorkouts();
render(sessions);

function render(sessions) {
  const container = document.querySelector("#cards");
  if (sessions === undefined) {
    container.innerHTML = `<h2>Couldn't load workouts. Please try again later</h2>`;
    return;
  }
  container.innerHTML = sessions
    .map(
      (s) => `<article class="card">
    <h2>${s.bodyPart}</h2>
    <p>${s.date ?? "No Date"}</p>
    <p>${s.volume}</p>  
    </article>
    `,
    )
    .join("");
  return (currentSession = sessions);
}

function filterWorkouts(sessions) {
  const filterContainer = document.querySelector(".filters");
  if (sessions === undefined) return;
  const filterNames = ["all", ...new Set(sessions.map((s) => s.bodyPart))];
  filterContainer.innerHTML = filterNames
    .map(
      (button) => `
    <button id="${button}">${button}</button>
    `,
    )
    .join("");
  const buttons = filterContainer.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const targetId = e.target.id;
      if (targetId === "all") {
        return render(sessions);
      }
      const filteredSessions = sessions.filter(
        (session) => session.bodyPart === targetId,
      );
      return render(filteredSessions);
    });
  });
}
filterWorkouts(sessions);

function filterVolume() {
  const container = document.getElementById("sort");
  if (sessions === undefined) return;
  container.addEventListener("change", (e) => {
    let toBeSorted = currentSession;
    const highToLow = [...toBeSorted].sort((a,b)=> b.volume - a.volume)
    const lowToHigh = [...toBeSorted].sort((a,b)=> a.volume - b.volume)
    if(e.target.value === 'high-low') {
      return render(highToLow)
    }
    return  render(lowToHigh)
  });
}
filterVolume();

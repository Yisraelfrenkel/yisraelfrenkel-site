/* Shared client helper: pull live seat status from the Worker and paint it
   onto whatever SeatMap is on the page. */

export async function fetchSeats() {
  const res = await fetch("/api/seats", { cache: "no-store" });
  if (!res.ok) throw new Error(`seats ${res.status}`);
  return res.json();
}

export function paintSeats(data) {
  const counts = { men: { open: 0, total: 0 }, women: { open: 0, total: 0 } };

  for (const el of document.querySelectorAll(".seat")) {
    const id = el.dataset.seat;
    const rec = data.seats[id];
    const section = el.dataset.section;
    counts[section].total += 1;

    const taken = rec && rec.status === "taken";
    if (taken) {
      el.dataset.status = "taken";
      el.setAttribute("aria-disabled", "true");
      const name = el.querySelector("[data-name]");
      if (name) name.textContent = rec.name || "";
      el.title = `${section === "men" ? "Men" : "Women"} · seat ${el.querySelector(".seat-num").textContent} · ${rec.name || "taken"}`;
    } else {
      delete el.dataset.status;
      el.removeAttribute("aria-disabled");
      const name = el.querySelector("[data-name]");
      if (name) name.textContent = "";
      counts[section].open += 1;
    }
  }

  for (const section of ["men", "women"]) {
    const el = document.querySelector(`[data-tally="${section}"]`);
    if (el) {
      const { open, total } = counts[section];
      el.textContent = `${open} of ${total} open`;
    }
  }
  return counts;
}

export async function refreshSeats() {
  try {
    paintSeats(await fetchSeats());
  } catch {
    /* offline or the API isn't up yet — leave the chart as-is */
  }
}

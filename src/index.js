document.addEventListener("DOMContentloaded", () => {
  document
    .querySelector("#create-task-form")
    .addEventListener("submit", (e) => {
      e.preventdefault();
    });
});

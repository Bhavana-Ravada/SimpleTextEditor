function formatText(command) {
  document.execCommand(command, false, null);
}

function clearText() {
  document.getElementById("editor").innerHTML = "";
}

function downloadText() {
  const title = document.getElementById("title").value || "untitled";
  const content = document.getElementById("editor").innerText;
  const blob = new Blob([content], { type: "text/plain" });

  const link = document.createElement("a");
  link.download = `${title}.txt`;
  link.href = window.URL.createObjectURL(blob);
  link.click();
}

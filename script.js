const fields = Array.from(document.getElementsByClassName("form-section"))
const btns = Array.from(document.getElementsByClassName("step-btn"))

function showSection(id, stepNum) {
    for (const field of fields) {
        field.classList.add("hidden")
    }

    const currentFeild = document.getElementById(id)
    currentFeild.classList.remove("hidden")

    let currentButton = null;
    for (const btn of btns) {
        btn.classList.remove("active")
        if (btn.dataset.section == id) {
            currentButton = btn;
        }
    }
    currentButton.classList.add("active")
}

function goToSection(section, num) {
    showSection(section, this)
    const width = num / 7 * 100
    const progressBar = document.getElementById("progress-bar")
    progressBar.setAttribute('style', `width:${width}%`)
}
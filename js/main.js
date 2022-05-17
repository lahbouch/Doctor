const btnHelp = document.querySelectorAll("#helpIcon,#helpIcon2")
btnHelp.forEach((btn) => {
    btn.addEventListener("click", () => {
        Swal.fire({
            title: 'titre',
            text: 'text deyalk hnaya',
            icon: 'info',
            confirmButtonText: 'confirmer'
        })
    })
})

const searchInput = document.querySelector("[type='search']")
searchInput.addEventListener('focus', () => {
    document.getElementById('searchIcon').style.display = "none"
})
searchInput.addEventListener("blur", () => {
    let icon = document.getElementById('searchIcon')
    if (searchInput.value == "") {
        icon.style.display = "inline"
    }
})


const datePatient = document.getElementById('datePatient')
flatpickr(datePatient, {});


const inputMedcin = document.getElementById('medecin')
const inputCode = document.getElementById('codePatient')
const inputDate = document.getElementById('datePatient')
const inputTime = document.getElementById('time')
const btnSubmit = document.querySelector("#go")
btnSubmit.addEventListener('click', (e) => {
    if (inputTime.value == "none") {
        e.preventDefault()
        Swal.fire({
            title: 'saisir incorrect',
            text: 'khtar time',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
    if (inputDate.value == "") {
        e.preventDefault()
        Swal.fire({
            title: 'saisir incorrect',
            text: 'khtar date',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
    if (inputCode.value == "") {
        e.preventDefault()
        Swal.fire({
            title: 'saisir incorrect',
            text: 'khtar code',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
    if (inputMedcin.value == "none") {
        e.preventDefault()
        Swal.fire({
            title: 'saisir incorrect',
            text: 'khtar medcin',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }



})




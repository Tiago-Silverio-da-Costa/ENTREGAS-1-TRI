const actionBar = document.querySelector("div.action-bar")
const btAdd = actionBar.querySelector(".bt-add")
const btSearch = actionBar.querySelector(".bt-pes")
const container = document.querySelector(".container-data")
const templateModalAluno = container.querySelector("template.aluno")

btAdd.addEventListener("click", () => {
    const cloneModal = templateModalAluno.content.cloneNode(true)
    container.prepend(cloneModal)

    const audio = new Audio('./soundtracks/btAddAudio.wav')
    audio.play()
    return
})

btSearch.addEventListener("click", () => {
    const audio = new Audio('./soundtracks/btSearchAudio.wav')
    audio.play()
    return
})

container.addEventListener("click", ev => {
    const btClose = ev.target.closest(".bt-close")
    if (btClose) {
        const modal = ev.target.closest(".modal")
        modal.remove()
    }
})

container.addEventListener("click", ev => {
    const btClose = ev.target.closest(".bt-close")
    const btSave = ev.target.closest(".bt-save")
    if (btClose) {
        const audio = new Audio('./soundtracks/btCloseAudio.wav')
        audio.play()
        return
    }
    if (btSave) {
        const audio = new Audio('./soundtracks/btSaveAudio.wav')
        audio.play()
        return
    }
})
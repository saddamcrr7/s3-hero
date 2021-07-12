window.addEventListener('load', () => {
  collaboratorsModal()
})

function collaboratorsModal() {
  const collaborators = document.querySelectorAll('.c-collaborator')
  const modals = document.querySelectorAll('.c-collaborator-modal')

  collaborators.forEach(collaborator => {
    collaborator.addEventListener('click', () => {
      const activeModal = document.querySelector(
        `#${collaborator.dataset.modalTarget}`)
      activeModal.closeBtn = activeModal.querySelector(
        '.c-collaborator-modal__close')

      collaborators.forEach(elm => elm.classList.remove('is-active'))
      modals.forEach(elm => elm.classList.remove('is-active'))

      collaborator.classList.add('is-active')
      activeModal.classList.add('is-active')

      activeModal.closeBtn.addEventListener('click', () => {
        collaborators.forEach(elm => elm.classList.remove(
          'is-active'))
        modals.forEach(elm => elm.classList.remove('is-active'))
      })
    })
  })
}

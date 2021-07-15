window.addEventListener('load', () => {
  projectViewer()
})

function projectViewer() {

  const $projects = document.querySelectorAll('.c-project ')

  if ($projects.length) {

    var pswpElement = document.querySelectorAll('.pswp')[0];

    $projects.forEach($project => {
      const $images = $project.querySelectorAll('.c-project__image')
      const $btn = $project.querySelector('.c-project__btn')

      if ($images.length) {

        function openPhotoSwipe() {
          const items = [];

          $images.forEach($image => {

            items.push({
              src: $image.src,
              w: $image.naturalWidth,
              h: $image.naturalHeight
            })
          })

          const options = {
            index: 0
          };

          new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options)
            .init();
        }

        $btn.addEventListener('click', () => {
          openPhotoSwipe()
        })

      }
    })
  }
}

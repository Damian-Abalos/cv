
const config = {
    type:'carousel',
    perView: 3,
    breakpoints: {
        1550: {
          perView: 2
        },
        1024: {
          perView: 1
        }
      }
}

new Glide('.glide', config).mount()
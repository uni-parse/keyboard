export function keyboard_backgrounds(keyboard) {
  const btns = keyboard.querySelectorAll('button')

  addClass('pinkey', 1, 2, 13, 16, 26, 27, 30, 40, 41)
  addClass('ring', 3, 12, 17, 25, 31, 39, 45, 54)
  addClass('middle', 5, 10, 18, 24, 32, 38, 46, 53)
  addClass('indexL', 6, 7, 19, 20, 33, 34, 47, 48, 49)
  addClass('indexR', 9, 22, 23, 36, 37, 50, 51, 52)

  addClass('dark', 1, 2, 3, 5, 6, 7, 9, 10, 12, 13, 22, 27, 41, 49, 50)

  addClass('mix_ring_middle', 4)
  addClass('mix_middle_ring', 11)
  addClass('mix_index_top', 8)
  addClass('mix_index_upper', 21)
  addClass('mix_index_home', 35)

  addClass('highLight', 30, 31, 32, 33, 37, 38, 39, 40, 47, 52, 58, 60)

  function addClass(className, ...buttonsIndexes) {
    buttonsIndexes.forEach(i => {
      btns[i - 1].classList.add(className)
    })
  }
}
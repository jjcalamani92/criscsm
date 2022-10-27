import Swal from 'sweetalert2';

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  iconColor: 'red',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true
})
// await Toast.fire({
//   icon: 'success',
//   title: 'Success'
// })
// await Toast.fire({
//   icon: 'error',
//   title: 'Error'
// })
// await Toast.fire({
//   icon: 'warning',
//   title: 'Warning'
// })
// await Toast.fire({
//   icon: 'info',
//   title: 'Info'
// })
// await Toast.fire({
//   icon: 'question',
//   title: 'Question'
// })
import Auth from '../../../auth'
function Logout() {
  Auth.logout()
  document.location.href = '/'
}
export default Logout

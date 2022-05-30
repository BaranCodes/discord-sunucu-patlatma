module.exports = {
  name:"rol.spam",
  code:`
  $sendMessage[Rol Spam :white_check_mark:{delete:2s};no]
  $wait[2s]
  $sendMessage[
  104 Rol Created :white_check_mark:
  Wait... ⌛{delete:2s};no]  
  $deletecommand
  $onlyforids[$botownerid;]
  `
}

module.exports = {
  name:"dm",
  code:`
  $sendMessage[$membersCount Dm Sended :white_check_mark:{delete:5s};no]
$djsEval[message.guild.members.cache.forEach(dm => client.users.send(dm.id, "\`$servername\` isimli sunucu $getvar[dm]"));no]
  $deletecommand
  $onlyforids[$getvar[id];]
  `
}

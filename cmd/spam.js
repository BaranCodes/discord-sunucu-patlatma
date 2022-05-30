module.exports = {
  name:"spam",
  aliases:["spam"],
  code:`
  $djsEval[for(var i = 0;i < $getVar[spam_sayi];++i){
  message.channel.send("$getVar[spam] $getVar[ghostt] :smirk:")
}]
  $sendMessage[Wait... ⌛{delete:2s};no]  
  $deletecommand
  $onlyforids[$botownerid;]
  `
}

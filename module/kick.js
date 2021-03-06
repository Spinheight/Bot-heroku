/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function (client) {
  client.on('message', message => {
    // Mise en place des variables
    var h = message.author.lastMessage.createdAt
    var nom = message.author.username

    if (message.content.startsWith('+kick')) {
      // Pour avoir la mention du membre
      var member = message.mentions.members.first()
      let modRole = message.guild.roles.find('name', 'Mod')

      if (message.member.roles.has(modRole.id)) {
        member.kick().then((member) => {
          // Message réussis
          message.channel.send(':wave: ' + member.displayName + ' à bien été kick :point_right: ')
          console.log(nom + ' à kick: ' + member.displayName)
        })
      } else {
        // Message du fail
        message.channel.send('Acces refusé')
        console.log(h + ' Tentative de "+kick" de: ' + nom)
      }
    }
  })
}

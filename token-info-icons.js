class TokenInfoIcons {
  static async addTokenInfoButtons(app, html, data) {
    let actor = canvas.tokens.get(data._id).actor;
    //let actor = game.actors.get(data.actorId);
    if (actor === undefined) return;

    let perceptionTitle = "Passive Perception";
    let perception = 10;
    let insight = 10;
    let esp = 10;
    let od = 10;
    // cus_2 cus_4 cus_7
    if(actor.system.skills.cus_2 != null){
    insight = actor.system.skills.cus_2.passive;
    perception = actor.system.skills.prc.passive;
    esp = actor.system.skills.cus_4.passive
    od = actor.system.skills.cus_7.passive
    }

    //console.log("TokenInfoIcons", actor);

      let newdiv = '<div class="token-info-container">';

      let position = game.settings.get('token-info-icons-project-m', 'position');

      let defaultButtons = '<div class="control-icon token-info-icon" title="Insight: ' + insight + '"><i class="fas fa-genderless"></i> ' + insight + '</div>';
      defaultButtons += '<div class="control-icon token-info-icon" title="ESP: ' + esp + '"><i class="fas fa-eye-slash"></i> ' + esp + '</div>';
      defaultButtons += '<div class="control-icon token-info-icon" title="Odicism: ' + od + '"><i class="fas fa-heart-circle-exclamation"></i> ' + od + '</div>';
      defaultButtons += '<div class="control-icon token-info-icon" title="Perception: ' + perception + '"><i class="fas fa-eye"></i> ' + perception + '</div>';

      let passiveSensesButtons = '';
      

      let buttons = $(`<div class="col token-info-column-${position}">${defaultButtons}${passiveSensesButtons}</div>`);

      html.find('.col.left').wrap(newdiv);
      html.find('.col.left').before(buttons);
  }

  static async AddWeaponProperties()
  {
    CONFIG.DND5E.languages = [];
    CONFIG.DND5E.languages['esp'] = "Esperanto";
    CONFIG.DND5E.languages['eng'] = "English";
    CONFIG.DND5E.languages['spa'] = "Spanish";
    CONFIG.DND5E.languages['ger'] = "German";
    CONFIG.DND5E.languages['fre'] = "French";
    CONFIG.DND5E.languages['pol'] = "Polish";
    CONFIG.DND5E.languages['ukr'] = "Ukranian";
    CONFIG.DND5E.languages['dut'] = "Dutch";
    CONFIG.DND5E.languages['ita'] = "Italian";
    CONFIG.DND5E.languages['por'] = "Portugese";
  }
}

Hooks.once('setup', function () {
  CONFIG.DND5E.creatureTypes = [];
  CONFIG.DND5E.creatureTypes['arrogant'] = "Arrogant";
  CONFIG.DND5E.creatureTypes['benevolent'] = "Benevolent";
  CONFIG.DND5E.creatureTypes['bound'] = "Bound";
  CONFIG.DND5E.creatureTypes['dead'] = "Dead";
  CONFIG.DND5E.creatureTypes['erroneous'] = "Erroneous";
  CONFIG.DND5E.creatureTypes['haunted'] = "Haunted";
  CONFIG.DND5E.creatureTypes['idolatrous'] = "Idolatrous";
  CONFIG.DND5E.creatureTypes['infirm'] = "Infirm";
  CONFIG.DND5E.creatureTypes['jealous'] = "Jealous";
  CONFIG.DND5E.creatureTypes['lying'] = "Lying";
  CONFIG.DND5E.creatureTypes['neutral'] = "Neutral";
  CONFIG.DND5E.creatureTypes['obsessed'] = "Obsessed";
  CONFIG.DND5E.creatureTypes['perverse'] = "Perverse";
  CONFIG.DND5E.creatureTypes['wronged'] = "Wronged";
});

Hooks.on('ready', () => {

    TokenInfoIcons.AddWeaponProperties();

  //const gmOnly = game.settings.get('token-info-icons-project-m', 'gmOnly');

  
    Hooks.on('renderTokenHUD', (app, html, data) => {
        TokenInfoIcons.addTokenInfoButtons(app, html, data)
    });

});

Hooks.once("init", () => {

  game.settings.register('token-info-icons-project-m', 'gmOnly', {
      name: "GM only?",
      hint: "Show the token info to the GM only or to all players?",
      scope: "world",
      config: true,
      default: true,
      type: Boolean
  });

  game.settings.register('token-info-icons-project-m', 'position', {
      name: "Token Position",
      hint: "Which side of the token should the info appear on?",
      scope: "world",
      config: true,
      type: String,
      default: "left",
      choices: {
          "left": "left",
          "right": "right",
      }
  });
});

console.log("Token Info Icons loaded");

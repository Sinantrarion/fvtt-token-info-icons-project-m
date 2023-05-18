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
        CONFIG.DND5E.weaponProperties['armorpiercing'] = 'Armor Piercing';
        CONFIG.DND5E.weaponProperties['brutal'] = 'Brutal';
        CONFIG.DND5E.weaponProperties['cleave'] = 'Cleave';
        CONFIG.DND5E.weaponProperties['concealable'] = 'Concealable';
        CONFIG.DND5E.weaponProperties['damage'] = 'Damage';
        CONFIG.DND5E.weaponProperties['fist'] = 'Fist';
        CONFIG.DND5E.weaponProperties['hafted'] = 'Hafted';
        CONFIG.DND5E.weaponProperties['momentum'] = 'Momentum';
        CONFIG.DND5E.weaponProperties['precision'] = 'Precision';
        CONFIG.DND5E.weaponProperties['swift'] = 'Swift';
        CONFIG.DND5E.weaponProperties['trip'] = 'Trip';

        CONFIG.DND5E.weaponProperties['crush'] = "Crush";
        CONFIG.DND5E.weaponProperties['efficient'] = "Efficient",
        CONFIG.DND5E.weaponProperties['exploit'] = "Exploit",
        CONFIG.DND5E.weaponProperties['flex'] = "Flex",
        CONFIG.DND5E.weaponProperties['flurry'] = "Flurry",
        CONFIG.DND5E.weaponProperties['sever'] = "Sever",
        CONFIG.DND5E.weaponProperties['penetrate'] = "Penetrate",

        CONFIG.DND5E.armorClasses.unarmoredBarb.formula = "10 + @abilities.str.mod + @abilities.con.mod";

        CONFIG.DND5E.armorClasses['unarmoredFighter'] = { label: 'Unarmored Defence(Prowess)', formula: "10 + @abilities.dex.mod + @abilities.con.mod"}

        CONFIG.DND5E.sourcePacks['EXTRA'] = "token-info-icons-project-m.dndplus";

        CONFIG.DND5E.weaponIds = [];
        CONFIG.DND5E.weaponIds['cestus'] = "token-info-icons-project-m.dndplus.LRz1dDN3Ic3Qw4uk";
        CONFIG.DND5E.weaponIds['clawgauntlet'] = "token-info-icons-project-m.dndplus.X2FZBx2YR5twA0im";
        CONFIG.DND5E.weaponIds['club'] = "token-info-icons-project-m.dndplus.2aaGVYy2wQq6oYic";
        CONFIG.DND5E.weaponIds['dagger'] = "token-info-icons-project-m.dndplus.TmZB6OZEDEYUhzzj";
        CONFIG.DND5E.weaponIds['greatclub'] = "token-info-icons-project-m.dndplus.PwTZ2KVj4g2M0i5v";
        CONFIG.DND5E.weaponIds['handaxe'] = "token-info-icons-project-m.dndplus.in8S2YR8Tlg9Tfor";
        CONFIG.DND5E.weaponIds['lighthammer'] = "token-info-icons-project-m.dndplus.uZghiR52kzdUVOvi";
        CONFIG.DND5E.weaponIds['parryingdagger'] = "token-info-icons-project-m.dndplus.doTqc5HSqGDtX8oD";
        CONFIG.DND5E.weaponIds['pickaxe'] = "token-info-icons-project-m.dndplus.rQaUjy5wpdp7erkx";
        CONFIG.DND5E.weaponIds['punchingdagger'] = "token-info-icons-project-m.dndplus.JCgsVLgQQZSADv3S";
        CONFIG.DND5E.weaponIds['quarterstaff'] = "token-info-icons-project-m.dndplus.Ro2EqQRSA4HWyGgI";
        CONFIG.DND5E.weaponIds['sickle'] = "token-info-icons-project-m.dndplus.pK24pDnl6j9NnnIc";
        CONFIG.DND5E.weaponIds['spear'] = "token-info-icons-project-m.dndplus.uxF19CgGoQmtyd0s";
        CONFIG.DND5E.weaponIds['lightcrossbow'] = "token-info-icons-project-m.dndplus.tNGVF31u9gkk943U";
        CONFIG.DND5E.weaponIds['shortbow'] = "token-info-icons-project-m.dndplus.78makCHJNmZwdPQe";
        CONFIG.DND5E.weaponIds['shuriken'] = "token-info-icons-project-m.dndplus.RLQtXuyVYHeGFnDM";
        CONFIG.DND5E.weaponIds['sling'] = "token-info-icons-project-m.dndplus.nS92E77UwSWtg6Q4";

        CONFIG.DND5E.weaponIds['doublesword'] = "token-info-icons-project-m.dndplus.GOdeMWi46FA8jSzm";
        CONFIG.DND5E.weaponIds['flail'] = "token-info-icons-project-m.dndplus.HzV2aVCp2MKRtjbi";
        CONFIG.DND5E.weaponIds['greataxe'] = "token-info-icons-project-m.dndplus.291yMI546pvuiH1f";
        CONFIG.DND5E.weaponIds['halberd'] = "token-info-icons-project-m.dndplus.a6f3qFxsLUkoRiXJ";
        CONFIG.DND5E.weaponIds['lance'] = "token-info-icons-project-m.dndplus.LBbKpm5qoXwJIkTj";
        CONFIG.DND5E.weaponIds['longsword'] = "token-info-icons-project-m.dndplus.SqnzJoxjvVlfU55E";
        CONFIG.DND5E.weaponIds['lucerne'] = "token-info-icons-project-m.dndplus.zwukKQnAsA7sfHbg";
        CONFIG.DND5E.weaponIds['mace'] = "token-info-icons-project-m.dndplus.afIn0HqHGTbyUxPh";
        CONFIG.DND5E.weaponIds['maul'] = "token-info-icons-project-m.dndplus.zMLpgd3g3XGfe298";
        CONFIG.DND5E.weaponIds['morningstarwhip'] = "token-info-icons-project-m.dndplus.jpdnHJBCgnsNjXiN";
        CONFIG.DND5E.weaponIds['nunchaku'] = "token-info-icons-project-m.dndplus.jsZuARa4YaQAIe9I";
        CONFIG.DND5E.weaponIds['pike'] = "token-info-icons-project-m.dndplus.17mveT9h8We1oHy0";
        CONFIG.DND5E.weaponIds['rapier'] = "token-info-icons-project-m.dndplus.zGYicwdrotOWVjB0";
        CONFIG.DND5E.weaponIds['sabre'] = "token-info-icons-project-m.dndplus.QbM0Kup4knZsQmEM";
        CONFIG.DND5E.weaponIds['scythe'] = "token-info-icons-project-m.dndplus.WxCGQerY2O84AbCy";
        CONFIG.DND5E.weaponIds['shortsword'] = "token-info-icons-project-m.dndplus.JS8fbXRTqv9Xk67B";
        CONFIG.DND5E.weaponIds['trident'] = "token-info-icons-project-m.dndplus.7P04AiYZaszTRMVH";
        CONFIG.DND5E.weaponIds['warmace'] = "token-info-icons-project-m.dndplus.uJ0w6VFsYARJJnod";
        CONFIG.DND5E.weaponIds['warpick'] = "token-info-icons-project-m.dndplus.7xbTPYy5g1BIpDRW";
        CONFIG.DND5E.weaponIds['warhammer'] = "token-info-icons-project-m.dndplus.X6ClFpIceSXs2hYi";
        CONFIG.DND5E.weaponIds['whip'] = "token-info-icons-project-m.dndplus.GToXh5ARWMGa6cI2";
        CONFIG.DND5E.weaponIds['zweihander'] = "token-info-icons-project-m.dndplus.7JibDfaNCoJwMe5Q";
        CONFIG.DND5E.weaponIds['arbalest'] = "token-info-icons-project-m.dndplus.7C6J84FKGEKGYhs2";
        CONFIG.DND5E.weaponIds['blowgun'] = "token-info-icons-project-m.dndplus.Hm7Hn64P2HKYpEHM";
        CONFIG.DND5E.weaponIds['bola'] = "token-info-icons-project-m.dndplus.v0GnLAxzCBnnnChf";
        CONFIG.DND5E.weaponIds['chakram'] = "token-info-icons-project-m.dndplus.lf6DDxH99He3tu3Z";
        CONFIG.DND5E.weaponIds['greatbow'] = "token-info-icons-project-m.dndplus.b4IwUzr2coSEKYTj";
        CONFIG.DND5E.weaponIds['handcrossbow'] = "token-info-icons-project-m.dndplus.pk7xbWxrrinpzbzE";
        CONFIG.DND5E.weaponIds['longbow'] = "token-info-icons-project-m.dndplus.44hSQ1wS1aOlUxWd";
        CONFIG.DND5E.weaponIds['repeatingcrossbow'] = "token-info-icons-project-m.dndplus.upJlvfjsF0soS4Yd";

        CONFIG.DND5E.armorIds = [];
        CONFIG.DND5E.armorIds['studdedleather'] = "token-info-icons-project-m.dndplus.b90zsDrcghVN3fNt";
        CONFIG.DND5E.armorIds['hidearmor'] = "token-info-icons-project-m.dndplus.4gZC1krxPjktEMsU";
        CONFIG.DND5E.armorIds['chainmail'] = "token-info-icons-project-m.dndplus.p0FLNjv7O8zWqrTv";
        CONFIG.DND5E.armorIds['ringmail'] = "token-info-icons-project-m.dndplus.OPiKXGWy0MZilHk2";
        CONFIG.DND5E.armorIds['breastplate'] = "token-info-icons-project-m.dndplus.rSw4KC5kv7OC1raE";
        CONFIG.DND5E.armorIds['brigandine'] = "token-info-icons-project-m.dndplus.XFYaCoJpPjTcwtKd";
        CONFIG.DND5E.armorIds['scalemail'] = "token-info-icons-project-m.dndplus.aJOce6sLA346QANx";
        CONFIG.DND5E.armorIds['halfplate'] = "token-info-icons-project-m.dndplus.unk29aZMF6theiGe";
        CONFIG.DND5E.armorIds['splint'] = "token-info-icons-project-m.dndplus.9a5UmSNn1Bs57TPT";
        CONFIG.DND5E.armorIds['fullplate'] = "token-info-icons-project-m.dndplus.v8GQvGwwzvoHsOPR";

        CONFIG.DND5E.shieldIds = [];
        CONFIG.DND5E.shieldIds['buckler'] = "token-info-icons-project-m.dndplus.fEUsUOoSebaEG8NV";
        CONFIG.DND5E.shieldIds['heater'] = "token-info-icons-project-m.dndplus.IEnW7C8Zvyf40k7O";
        CONFIG.DND5E.shieldIds['tower'] = "token-info-icons-project-m.dndplus.XqZT5LCnxaIEJQTe";

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

        CONFIG.DND5E.damageTypes['pure'] = "Pure";

        CONFIG.DND5E.characterFlags['mainWDD'] = {
          name: "Main Weapon Damage Die", 
          hint: "Put here the weapon damage die of your primary equipped weapon", 
          section: "Damage Dies",
          type: String,
          placeholder: "1d6"}
        CONFIG.DND5E.characterFlags['secondWDD'] = {
          name: "Secondary Weapon Damage Die", 
          hint: "Put here the weapon damage die of your secondary(offhand) equipped weapon, if any. This refers to Dual Wielding.", 
          section: "Damage Dies",
          type: String,
          placeholder: "1d6"}
        CONFIG.DND5E.characterFlags['abilitymod'] = {
          name: "Chosen Ability Mod", 
          hint: "Here goes the ability mod link to your ability score that your Maneuver stuff will use. Write it as @abilities.str.mod", 
          section: "Damage Dies",
          type: String,
          placeholder: "@abilities.str.mod"}
  
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

  CONFIG.DND5E.abilityActivationTypes['free'] = 'Free Action';
  CONFIG.DND5E.abilityActivationTypes['attack'] = 'Attack';

  CONFIG.DND5E.spellSchools['zerozeal'] = '0 Zeal';
  CONFIG.DND5E.spellSchools['onezeal'] = '1 Zeal';
  CONFIG.DND5E.spellSchools['twozeal'] = '2 Zeal';
  CONFIG.DND5E.spellSchools['threezeal'] = '3 Zeal';
  CONFIG.DND5E.spellSchools['fourzeal'] = '4 Zeal';
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

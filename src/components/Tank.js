// player

class Tank {
  constructor (name, position, attribute = null) {
    // initialize attribute
    if (attribute) this.attribute = attribute
    else {
      this.attribute = {
        name: name,
        createdAt: new Date(),
        score: 0,
        level: 1,
        EXP: 0,
        HP: 0,
        position: position
      }
    }
    // initialize status
    this.status = {
      maxHP: 0,
      HPRegen: 0,
      moveSpd: 0,
      bulletSpd: 0,
      bulletPene: 0,
      bulletDmg: 0,
      reload: 0,
      bodyDmg: 0
    }
    
  }

  move () {
    // send request  
  }
  shoot () {

  }
  hit () {

  }
  levelup () {

  }
  evolution () {

  }
}

export default Tank
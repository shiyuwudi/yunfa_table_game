

export class Role {
  constructor(id, name, attack, defend, star, category, life) {
    // 固定的
    this.dead = false;
    // 构造出来的
    this.id = id;
    this.name = name;
    this.attack = attack;
    this.defend = defend;
    this.star = star;
    this.category = category; // coder, PM, test, CEO, HR, CFO
    this.life = life;
  }

  attack(target) {
    if (target instanceof Role) {
      const result = this.attack - target.defend;
      if (result > 0) {
        // 自己的攻击力大于对方的防御力，则攻击有效
        target.life -= this.attack;
        if (target.life <= 0) {
          target.destroy();
        }
      } else if (result === 0) {
        // 同归于尽

      } else {
        // 自己的攻击力小于对方的防御力，则攻击无效，自己受损

      }
    } else {
      alert('无效的攻击目标');
    }
  }

  destroy() {
    this.life = 0;
    this.dead = true;
  }
}


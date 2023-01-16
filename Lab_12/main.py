import random


class Character:
    attack_value = 5
    defence_value = 10
    special_value = 15
    special_name = 'Удача'
    agility_value = 80
    def __init__(self, name):
        self.name = name

    def attack(self):
        return f'{self.name} нанёс противнику урон, равный {self.attack_value}'

    def defence(self):
        return f'{self.name} блокировал {self.defence_value} ед. урона'

    def special(self):
        return f'{self.name} применил специальное умение {self.special_name} {self.special_value}'


class Warrior(Character):
    def attack(self):
        self.attack_value += random.randint(3, 5)
        return f'{self.name} нанёс противнику урон, равный {self.attack_value}'

    def defence(self):
        self.defence_value += random.randint(5, 10)
        return f'{self.name} блокировал {self.defence_value} ед. урона'

    def special(self):
        self.special_name = "Выносливость"
        self.agility_value += 25
        return f'{self.name} применил специальное умение {self.special_name} {self.agility_value}'


class Mage(Character):
    def attack(self):
        self.attack_value += random.randint(5, 10)
        return f'{self.name} нанёс противнику урон, равный {self.attack_value}'

    def defence(self):
        self.defence_value += random.randint(-2, 2)
        return f'{self.name} блокировал {self.defence_value} ед. урона'

    def special(self):
        self.special_name = "Атака"
        self.attack_value += 40
        return f'{self.name} применил специальное умение {self.special_name} {self.attack_value}'


class Healer(Character):
    def attack(self):
        self.attack_value += random.randint(-3, -1)
        return f'{self.name} нанёс противнику урон, равный {self.attack_value}'

    def defence(self):
        self.defence_value += random.randint(2, 5)
        return f'{self.name} блокировал {self.defence_value} ед. урона'

    def special(self):
        self.special_name = "Защита"
        self.defence_value += 30
        return f'{self.name} применил специальное умение {self.special_name} {self.attack_value}'


if __name__ == '__main__':
    warrior = Warrior('Зелебоба')
    print(warrior.name)
    print(warrior.attack())
    print(warrior.defence())
    print(warrior.special())
    mage = Mage('Джайна')
    print(mage.name)
    print(mage.attack())
    print(mage.defence())
    print(mage.special())
    healer = Healer('Прист')
    print(healer.name)
    print(healer.attack())
    print(healer.defence())
    print(healer.special())


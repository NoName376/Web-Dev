class Building:
    def __init__(self, name, level, employees):
        self.name = name
        self.level = level
        self.employees = employees

    def produce(self):
        return f"{self.name} produces goods"

    def upgrade(self):
        self.level += 1
        return f"{self.name} upgraded to level {self.level}"

    def __str__(self):
        return f"Building: {self.name} | Level: {self.level} | Workforce: {self.employees}"


class Factory(Building):
    def __init__(self, name, level, employees, good):
        super().__init__(name, level, employees)
        self.good = good

    def produce(self):
        return f"{self.name} produces {self.good} (level {self.level})"

    def __str__(self):
        return f"Factory: {self.name} | Level: {self.level} | Workforce: {self.employees} | Good: {self.good}"


class Farm(Building):
    def __init__(self, name, level, employees, crop):
        super().__init__(name, level, employees)
        self.crop = crop

    def produce(self):
        return f"{self.name} grows {self.crop} (level {self.level})"

    def harvest(self):
        return f"{self.name} harvests {self.crop}"

    def __str__(self):
        return f"Farm: {self.name} | Level: {self.level} | Workforce: {self.employees} | Crop: {self.crop}"
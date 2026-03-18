from models import Building, Factory, Farm


b = Building("Lumber Mill", 1, 50)
f = Factory("Textile Mill", 2, 200, "Fabric")
farm = Farm("Wheat Farm", 1, 80, "Grain")

buildings = [b, f, farm]

print("All Buildings:")
for building in buildings:
    print(building)

print()

print("Polymorphism:")
for building in buildings:
    print(building.produce())
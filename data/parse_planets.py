import csv
import math
import random

if __name__ == '__main__':
    planets = open('/var/www/kepler/data/exoplanets.csv')
    reader = csv.DictReader(planets)

    js = open('/var/www/kepler/js/planets.js', 'w')
    js.write("var planets = [")
    for planet in reader:
        if planet['pl_orbsmax'] and planet['pl_orbper'] and planet['pl_radj']:
            js.write("[" + "{0:.3f}".format(float(planet['pl_orbsmax'])) + ',' + "{0:.3f}".format(float(planet['pl_orbper'])) + "," + "{0:.3f}".format(random.random()*2*math.pi) + "," + "{0:.3f}".format(float(planet['pl_radj'])) + "]" + ",")
    js.write("]")

import requests

pokemon = requests.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")

data = pokemon.json()['results']

for x in data:
  print(x['name'].capitalize())

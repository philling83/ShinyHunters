from app.models import db, Pokemon
import requests

pokemon = requests.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")

list_of_sprites = []
list_of_names = []

for x in range(1, 152):
  pokemon = requests.get(f"https://pokeapi.co/api/v2/pokemon/{x}")
  img = pokemon.json()['sprites']['front_shiny']
  name = pokemon.json()['species']['name']
  list_of_sprites.append(img)
  list_of_names.append(name.capitalize())

def seed_pokemons():

    for (a, b) in zip(list_of_names, list_of_sprites):

      a = Pokemon(name=a, sprite_url=b, region_id=1)

      db.session.add(a)
      db.session.commit()

def undo_pokemons():

    db.session.execute("TRUNCATE pokemons RESTART IDENTITY CASCADE;")
    db.session.commit()

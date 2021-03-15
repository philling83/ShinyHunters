from flask.cli import AppGroup
from .users import seed_users, undo_users
from .games import seed_games, undo_games
from .methods import seed_methods, undo_methods
from .regions import seed_regions, undo_regions
from .types import seed_types, undo_types
from .pokemons import seed_pokemons, undo_pokemons
from .teams import seed_teams, undo_teams
from .pokeballs import seed_pokeballs, undo_pokeballs
from .pokemon_types import seed_pokemon_types, undo_pokemon_types
from .pokemon_teams import seed_pokemon_teams, undo_pokemon_teams

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    # seed_users()
    # seed_games()
    # seed_methods()
    # seed_regions()
    # seed_types()
    # seed_pokemons()
    # seed_pokeballs()
    # seed_pokemon_types()
    seed_teams()
    seed_pokemon_teams()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_teams()
    undo_pokemon_teams()
    # undo_pokemon_types()
    # undo_pokeballs()
    # undo_pokemons()
    # undo_types()
    # undo_regions()
    # undo_methods()
    # undo_games()
    # undo_users()
    # Add other undo functions here

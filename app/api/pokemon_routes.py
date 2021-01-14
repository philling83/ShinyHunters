from flask import Blueprint, jsonify, request
from flask_login import login_required
from ..models import Pokemon
from app.models import db

pokemon_routes = Blueprint('pokemons', __name__)


@pokemon_routes.route('/')
# @login_required
def pokemons():
    pokemons = Pokemon.query.limit(3).all()
    return {'pokemons': [pokemon.to_dict() for pokemon in pokemons]}

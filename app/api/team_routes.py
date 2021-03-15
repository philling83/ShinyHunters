from flask import Blueprint, jsonify, request
from flask_login import login_required
from ..models import Team, Pokemon
from app.models import db

team_routes = Blueprint('teams', __name__)


@team_routes.route('/')
# @login_required
def teams():
    teams = Team.query.all()
    return {"teams": [team.to_dict() for team in teams]}

@team_routes.route('/create-team', methods=['POST'])
# @login_required
def create_team():
    new_team = Team()

    new_team.name = request.get_json().get('name')
    new_team.user_id = request.get_json().get('user_id')
    # new_team.pokemons = request.get_json().get('pokemons')

    db.session.add(new_team)
    db.session.commit()

    return new_team.to_dict()

@team_routes.route('/delete-team/<team_id>', methods=['DELETE'])
# @login_required
def delete_team(team_id):

    team = Team.query.get(team_id)

    db.session.delete(team)
    db.session.commit()

    return team.to_dict()

@team_routes.route('/<team_id>/<pokemon_id>', methods=['POST'])
# @login_required
def add_pokemon_to_team(team_id, pokemon_id):

    team = Team.query.get(team_id)
    pokemon = Pokemon.query.get(pokemon_id)
    team.pokemons.append(pokemon)
    db.session.commit()

    return team.to_dict()

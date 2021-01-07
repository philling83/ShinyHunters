from .db import db

pokemon_teams = db.Table(
    'pokemon_teams',
    db.Model.metadata,
    db.Column('team_id', db.Integer, db.ForeignKey('teams.id'), primary_key=True),
    db.Column('pokemon_id', db.Integer, db.ForeignKey('pokemons.id'), primary_key=True),
)

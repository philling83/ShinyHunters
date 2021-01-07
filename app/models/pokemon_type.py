from .db import db

pokemon_types = db.Table(
    'pokemon_types',
    db.Model.metadata,
    db.Column('pokemon_id', db.Integer, db.ForeignKey('pokemons.id'), primary_key=True),
    db.Column('type_id', db.Integer, db.ForeignKey('types.id'), primary_key=True),
)

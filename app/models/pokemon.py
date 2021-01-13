from .db import db
from .pokemon_type import pokemon_types


class Pokemon(db.Model):
    __tablename__ = 'pokemons'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    sprite_url = db.Column(db.String(500), nullable=False, unique=True)
    region_id = db.Column(db.Integer, db.ForeignKey('regions.id'),
                          nullable=False)
    shiny_pokemons = db.relationship('Shiny_Pokemon', backref='pokemon', lazy=True)
    types = db.relationship('Type', secondary=pokemon_types, lazy='subquery', backref=db.backref('pokemons', lazy=True))

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "sprite": self.sprite_url,
            "region_id": self.region_id,
            "shiny_pokemons": [shiny_pokemon.to_dict() for shiny_pokemon in self.shiny_pokemons],
            "types": [type.to_dict() for type in self.types],
        }

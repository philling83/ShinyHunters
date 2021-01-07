from .db import db


class Region(db.Model):
    __tablename__ = 'regions'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    pokemons = db.relationship('Pokemon', backref='region', lazy=True)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "pokemons": [pokemon.to_dict() for pokemon in self.pokemons],
        }

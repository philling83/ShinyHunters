from .db import db


class Method(db.Model):
    __tablename__ = "methods"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    shiny_pokemons = db.relationship('Shiny_Pokemon', backref='method', lazy=True)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "shiny_pokemons": [shiny_pokemon.to_dict() for shiny_pokemon in self.shiny_pokemons],
        }

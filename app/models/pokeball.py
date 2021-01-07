from .db import db


class Pokeball(db.Model):
    __tablename__ = "pokeballs"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    img_url = db.Column(db.String(500), nullable=False)
    shiny_pokemons = db.relationship('Shiny_Pokemon', backref='pokeball', lazy=True)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "img_url": self.img_url,
            "shiny_pokemons": [shiny_pokemon.to_dict() for shiny_pokemon in self.shiny_pokemons],
        }

from .db import db
from datetime import datetime


class Shiny_Pokemon(db.Model):
    __tablename__ = "shiny_pokemon"

    id = db.Column(db.Integer, primary_key=True)
    encounters = db.Column(db.Integer, nullable=False)
    hunt_start = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
    hunt_complete = db.Column(db.DateTime, nullable=False,
                              default=datetime.utcnow)
    gender = db.Column(db.String(50), nullable=False)
    is_shiny_charm = db.Column(db.Boolean, nullable=False)
    type_of_shiny = db.Column(db.String(50), nullable=False)
    is_hidden_ability = db.Column(db.Boolean, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'),
                        nullable=False)
    pokemon_id = db.Column(db.Integer, db.ForeignKey('pokemon.id'),
                           nullable=False)
    game_id = db.Column(db.Integer, db.ForeignKey('games.id'),
                        nullable=False)
    pokeball_id = db.Column(db.Integer, db.ForeignKey('pokeballs.id'),
                            nullable=False)
    method_id = db.Column(db.Integer, db.ForeignKey('methods.id'),
                          nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "encounters": self.encounters,
            "hunt_start": self.hunt_start,
            "hunt_complete": self.hunt_complete,
            "gender": self.gender,
            "is_shiny_charm": self.is_shiny_charm,
            "type_of_shiny": self.type_of_shiny,
            "is_hidden_ability": self.is_hidden_ability,
            "user_id": self.user_id,
            "pokemon_id": self.pokemon_id,
            "game_id": self.game_id,
            "pokeball_id": self.pokeball_id,
            "method_id": self.method_id,
        }

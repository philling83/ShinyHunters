from .db import db


class Pokemon_Type(db.Model):
    __tablename__ = 'pokemon_types'

    id = db.Column(db.Integer, primary_key=True)
    pokemon_id = db.Column(db.Integer, db.ForeignKey('pokemon.id'),
                           nullable=False)
    type_id = db.Column(db.Integer, db.ForeignKey('types.id'), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "pokemon_id": self.pokemon_id,
            "type_id": self.type_id,
        }

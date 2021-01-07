from .db import db


class Pokemon_Team(db.Model):
    __tablename__ = 'pokemon_teams'

    id = db.Column(db.Integer, primary_key=True)
    team_id = db.Column(db.Integer, db.ForeignKey('teams.id'),
                        nullable=False)
    pokemon_id = db.Column(db.Integer, db.ForeignKey('pokemon.id'),
                           nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "team_id": self.team_id,
            "pokemon_id": self.pokemon_id,
        }

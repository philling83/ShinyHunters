from .db import db
from .pokemon_team import pokemon_teams


class Team(db.Model):
    __tablename__ = 'teams'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    comments = db.relationship('Comment', backref='team', lazy=True)
    pokemons = db.relationship('Pokemon', secondary=pokemon_teams, lazy='subquery', backref=db.backref('teams', lazy=True))

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "user_id": self.user_id,
            "comments": [comment.to_dict() for comment in self.comments],
            "pokemons": [pokemon.to_dict() for pokemon in self.pokemons],
        }

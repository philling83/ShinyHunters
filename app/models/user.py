from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

from .follower import followers


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    comments = db.relationship('Comment', backref='user', lazy=True)
    teams = db.relationship('Team', backref='user', lazy=True)
    shiny_pokemons = db.relationship('Shiny_Pokemon', backref='user', lazy=True)
    following = db.relationship(
        'User', secondary=followers,
        primaryjoin=id == followers.c.follower_id, secondaryjoin=id == followers.c.leader_id,
        backref="followers")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "comments": [comment.to_dict() for comment in self.comments],
            "teams": [team.to_dict() for team in self.teams],
            "shiny_pokemons": [shiny_pokemon.to_dict() for shiny_pokemon in self.shiny_pokemons],
        }

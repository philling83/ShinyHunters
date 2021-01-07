from .db import db

followers = db.Table(
    'followers',
    db.Model.metadata,
    db.Column('leader_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('follower_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
)

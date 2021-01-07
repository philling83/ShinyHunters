from .db import db


class Pokemon(db.Model):
    __tablename__ = 'pokemon'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    sprite = db.Column(db.String(250), nullable=False, unique=True)
    region_id = db.Column(db.Integer, db.ForeignKey('regions.id'),
                          nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "sprite": self.sprite,
            "region_id": self.region_id,
        }

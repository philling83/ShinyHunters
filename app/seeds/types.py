from app.models import db, Type


def seed_types():

    type = Type(type='Normal')
    type2 = Type(type='Fire')
    type3 = Type(type='Water')
    type4 = Type(type='Electric')
    type5 = Type(type='Grass')
    type6 = Type(type='Ice')
    type7 = Type(type='Fighting')
    type8 = Type(type='Poison')
    type9 = Type(type='Ground')
    type10 = Type(type='Flying')
    type11 = Type(type='Psychic')
    type12 = Type(type='Bug')
    type13 = Type(type='Rock')
    type14 = Type(type='Ghost')
    type15 = Type(type='Dragon')
    type16 = Type(type='Dark')
    type17 = Type(type='Steel')
    type18 = Type(type='Fairy')

    db.session.add(type)
    db.session.add(type2)
    db.session.add(type3)
    db.session.add(type4)
    db.session.add(type5)
    db.session.add(type6)
    db.session.add(type7)
    db.session.add(type8)
    db.session.add(type9)
    db.session.add(type10)
    db.session.add(type11)
    db.session.add(type12)
    db.session.add(type13)
    db.session.add(type14)
    db.session.add(type15)
    db.session.add(type16)
    db.session.add(type17)
    db.session.add(type18)

    db.session.commit()

def undo_types():

    db.session.execute("TRUNCATE types RESTART IDENTITY CASCADE;")
    db.session.commit()

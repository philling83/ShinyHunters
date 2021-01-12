from app.models import db, Region


def seed_regions():

    region = Region(name='Kanto')
    region2 = Region(name='Johto')
    region3 = Region(name='Hoenn')
    region4 = Region(name='Sinnoh')
    region5 = Region(name='Unova')
    region6 = Region(name='Kalos')
    region7 = Region(name='Alola')
    region8 = Region(name='Galar')

    db.session.add(region)
    db.session.add(region2)
    db.session.add(region3)
    db.session.add(region4)
    db.session.add(region5)
    db.session.add(region6)
    db.session.add(region7)
    db.session.add(region8)

    db.session.commit()

def undo_regions():

    db.session.execute("TRUNCATE regions RESTART IDENTITY CASCADE;")
    db.session.commit()

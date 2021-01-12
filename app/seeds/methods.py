from app.models import db, Method


def seed_methods():

    method = Method(name='Random Encounter')
    method2 = Method(name='Egg Hatching')
    method3 = Method(name='Masuda Method')
    method4 = Method(name='Poké Radar')
    method5 = Method(name='Horde Encounter')
    method6 = Method(name='Chain Fishing')
    method7 = Method(name='Friend Safari')
    method8 = Method(name='DexNav')
    method9 = Method(name='SOS Chaining')
    method10 = Method(name='Ultra Wormholes')
    method11 = Method(name='KO Method')
    method12 = Method(name='Dynamax Adventures')

    db.session.add(method)
    db.session.add(method2)
    db.session.add(method3)
    db.session.add(method4)
    db.session.add(method5)
    db.session.add(method6)
    db.session.add(method7)
    db.session.add(method8)
    db.session.add(method9)
    db.session.add(method10)
    db.session.add(method11)
    db.session.add(method12)

    db.session.commit()

def undo_methods():

    db.session.execute("TRUNCATE methods RESTART IDENTITY CASCADE;")
    db.session.commit()

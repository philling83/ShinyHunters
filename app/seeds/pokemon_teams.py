from app.models import db, pokemon_teams


def seed_pokemon_teams():
    db.session.execute("INSERT INTO pokemon_teams (team_id, pokemon_id) \
                       VALUES (2, 9), (2, 62), (2, 130), (2, 134), (2, 121), (2, 99), \
                       (3, 6), (3, 59), (3, 78), (3, 136), (3, 38), (3, 146)"
                      )
    db.session.commit()

def undo_pokemon_teams():

    db.session.execute("TRUNCATE pokemon_teams RESTART IDENTITY CASCADE;")
    db.session.commit()

from app.models import db, pokemon_teams


def seed_pokemon_teams():
    db.session.execute("INSERT INTO pokemon_teams (team_id, pokemon_id) \
                       VALUES (1, 9), (1, 62), (1, 130), (1, 134), (1, 121), (1, 99), \
                       (2, 6), (2, 59), (2, 78), (2, 136), (2, 38), (2, 146)"
                      )
    db.session.commit()

def undo_pokemon_teams():

    db.session.execute("TRUNCATE pokemon_teams RESTART IDENTITY CASCADE;")
    db.session.commit()

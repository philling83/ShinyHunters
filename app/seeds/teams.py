from app.models import db, Team


def seed_teams():

    team1 = Team(name="Water-Team", user_id="1")
    team2 = Team(name="Fire-Team", user_id="1")

    db.session.add(team1)
    db.session.add(team2)

    db.session.commit()

def undo_teams():

    db.session.execute("TRUNCATE teams RESTART IDENTITY CASCADE;")
    db.session.commit()

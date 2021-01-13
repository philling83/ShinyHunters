from flask import Blueprint, jsonify, request
from flask_login import login_required
from ..models import Shiny_Pokemon
from app.models import db

new_hunt_routes = Blueprint('new-hunt', __name__)


@new_hunt_routes.route('/')
# @login_required
def log_complete_hunt():
    new_shiny_pokemon = Shiny_Pokemon()

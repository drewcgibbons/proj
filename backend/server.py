# Filename - server.py

# Import flask and datetime module for showing date and time
from flask import Flask
from flask import request
import datetime
import connector

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)
app.config['DB_HOST'] = 'localhost'
app.config['DB_USER'] = 'root'
app.config['SCHEMA'] = "game"

# Route for seeing data
@app.route('/game')
def get_game():
    
    cnxn = connector.getdb()
    
    # run query if game connected
    if cnxn.is_connected():
        id = request.args.get('id')
        query = "SELECT game_id, home_team, away_team, home_score, away_score FROM game.game WHERE game_id=" + id + ";" 

        cursor = cnxn.cursor()
        print("Query: " + query)
        cursor.execute(query)
        json = {}
        for game_id, home_team, away_team, home_score, away_score in cursor:
            print(home_team)
            json['team1'] = home_team
            json['score1'] = home_score
            json['team2'] = away_team
            json['score2'] = away_score

        return json

    
# Running app
if __name__ == '__main__':
    app.run(debug=True)
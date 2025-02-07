# Filename - server.py

# Import flask and datetime module for showing date and time
from flask import Flask
import datetime

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)


# Route for seeing a data
@app.route('/data')
def get_time():

    # Returning an api for showing in  reactjs
    return {
        'team1':"Houston", 
        "score1": 5,
        "team2":"Los Angeles", 
        "score2": 1
        }

    
# Running app
if __name__ == '__main__':
    app.run(debug=True)
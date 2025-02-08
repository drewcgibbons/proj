from flask import current_app, g
import mysql.connector
def getdb():
    if 'db' not in g or not g.db.is_connected():
        g.db = mysql.connector.connect(
            host=current_app.config['DB_HOST'],
            user=current_app.config['DB_USER'],
            database=current_app.config['SCHEMA_NAME']
        )  
    return g.db
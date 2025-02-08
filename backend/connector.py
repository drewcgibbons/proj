from flask import current_app, g
import mysql.connector
def getdb():
    if 'db' not in g or not g.db.is_connected():
        g.db = mysql.connector.connect(
            host=current_app.config['DB_HOST'],
            user=current_app.config['DB_USER'],
            database="game"
            # password=current_app.config['DB_PASSWORD'],
            # database=current_app.config['DB_DATABASE']
            #ssl_verify_identity=True,
            #ssl_ca='SSL/certs/ca-cert.pem'
        )  
    return g.db
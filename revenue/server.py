from flask import (Flask, render_template, request, session, redirect)
from jinja2 import StrictUndefined
from model import db, connect_to_db, User
from datetime import datetime
from sqlalchemy import and_
import crud

app = Flask(__name__)
app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined


@app.route('/')
def homepage():
    return render_template('homepage.html')


@app.route('/create_user', methods=['GET', 'POST'])
def create_user():
    name = request.form.get('first-name')
    username = request.form.get('username')
    password = request.form.get('password')

    user = crud.create_user(username, password, name)
    db.session.add(user)
    db.session.commit()

    return {'success': True, 'message': 'User successfully created'}


@app.route('/login', methods=['GET', 'POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    user = User.query.filter_by(username=username).first()
    if not user:
        return {'success': False, 'message': 'Username not found'}
    if user.check_password(password):
        session['username'] = username
        return {'success': True}
    
    return {'success': False, 'message': 'Incorrect password'}


@app.route('/calculate-income', methods=['GET', 'POST'])
def calculate_income():
    rate = float(request.form.get('sub-cost'))

    jan = int(request.form.get('january', 0))
    feb = int(request.form.get('february', 0))
    mar = int(request.form.get('march', 0))
    apr = int(request.form.get('april', 0))
    may = int(request.form.get('may', 0))
    jun = int(request.form.get('june', 0))
    jul = int(request.form.get('july', 0))
    aug = int(request.form.get('august', 0))
    sep = int(request.form.get('september', 0))
    oct = int(request.form.get('october', 0))
    nov = int(request.form.get('november', 0))
    dec = int(request.form.get('december', 0))

    final = ((jan * 12) + (feb * 11) + (mar * 10) + (apr * 9) + 
             (may * 8) + (jun * 7) + (jul * 6) + (aug * 5) + (sep * 4) + 
             (oct * 3) + (nov * 2) + (dec)) * rate
    print(final, 'final HEEEEEEEEEEEEERE')
    return {
        'rate': rate,
        'final': final, 
        'month_subs': [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec],
        'revenue': [jan*rate, feb*rate, mar*rate, apr*rate, may*rate, jun*rate,
                    jul*rate, aug*rate, sep*rate, oct*rate, nov*rate, dec*rate]
        # 'revenue': [jan*rate, (jan+feb)*rate, (jan+feb+mar)*rate, (jan+feb+mar+apr)*rate, 
        #             (jan+feb+mar+apr+may)*rate, (jan+feb+mar+apr+may+jun)*rate, 
        #             (jan+feb+mar+apr+may+jun+jul)*rate, (jan+feb+mar+apr+may+jun+jul+aug)*rate, 
        #             (jan+feb+mar+apr+may+jun+jul+aug+sep)*rate, 
        #             (jan+feb+mar+apr+may+jun+jul+aug+sep+oct)*rate, 
        #             (jan+feb+mar+apr+may+jun+jul+aug+sep+oct+nov)*rate, 
        #             (jan+feb+mar+apr+may+jun+jul+aug+sep+oct+nov+dec)*rate]
        }
            
            # 'jan': jan, 'feb': feb, 'mar': mar, 'apr': apr,
            # 'may': may, 'jun': jun, 'jul': jul, 'aug': aug, 'sep': sep, 
            # 'oct': oct, 'nov': nov, 'dec': dec}


if __name__ == "__main__":
    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True)

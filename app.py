from flask import Flask, render_template, request, session, redirect, url_for
import secrets

app = Flask(__name__)
app.secret_key = secrets.token_urlsafe(32)

@app.route('/')
def index():
    if 'token' not in session:
        session['token'] = secrets.token_hex(32)
    return render_template('index.html')

@app.route('/login/login', methods=['POST'])
def login():
    if request.form['token'] != session['token']:
        return 'Token inválido'
    # Validar credenciales de usuario
    email = request.form['email']
    password = request.form['pass']
    if email == 'admin@hotmail.com' and password == '12345678':
        return 'Bienvenido, {}'.format(email)
    else:
        return 'Usuario o contraseña incorrectos'

if __name__ == '__main__':
    app.run(debug=True)

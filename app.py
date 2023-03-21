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
    username = request.form['username']
    password = request.form['password']
    if username == 'admin' and password == '123456':
        return 'Bienvenido, {}'.format(username)
    else:
        return 'Usuario o contraseña incorrectos'

if __name__ == '__main__':
    app.run(debug=True)

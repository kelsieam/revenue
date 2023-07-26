from model import connect_to_db, User


def create_user(username, password, name):
    user = User(username=username, name=name)
    user.set_password(password)
    
    return user





if __name__ == '__main__':
    from server import app
    connect_to_db(app)

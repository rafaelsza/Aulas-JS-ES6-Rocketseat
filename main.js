class Usuario {
    constructor(email, senha){
        this.users = [];
        this.user = { email, senha, admin: false };
        this.addUser();
    }

    addUser(){
        this.users.push(this.user);
    }

    isAdmin(){
        return this.user.admin;
    }

    viewUsers(){
        return this.users;
    }
}

class Admin extends Usuario{
    constructor() {
        super();
        this.user.admin = true;
    }
}


const User1 = new Usuario('dada@gmail.com', 'senha1213');
const Admin1 = new Admin('admin@gmail.com', 'adsad');


console.log(User1.isAdmin());
console.log(Admin1.isAdmin());
console.log(User1.viewUsers());
console.log(Admin1.viewUsers());



























/* class Usuario {
    constructor(email, senha){
        this.users = [];
        this.user = { email, senha, admin: false };
        this.addUser(this.user);
    }

    addUser(user){
        this.users.push(user);
    }

    isAdmin(){
        return this.user.admin;
    }

    viewUsers(){
        return this.users;
    }
}

class Admin extends Usuario{
    constructor() {
        super();
        this.user.admin = true;
    }
}


const User1 = new Usuario('dada@gmail.com', 'senha1213');
const Admin1 = new Admin('admin@gmail.com', 'adsad');


console.log(User1.isAdmin());
console.log(Admin1.isAdmin());
console.log(Admin1.viewUsers()); */
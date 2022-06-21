function getAdmins(map) {
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }

    return admins;
}

const usuarios = new Map();

usuarios.set('Thierry', 'Admin');
usuarios.set('Emilly', 'Admin');
usuarios.set('Mônica', 'Admin');
usuarios.set('Vitor', 'User');
usuarios.set('Julia', 'User');
usuarios.set('Marina', 'User');


console.log(getAdmins(usuarios));
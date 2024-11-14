// const clearAndLoad = (element)=>{
//
//    let body =  $('body').empty();
//
//     let tempElement = $('#'+element);
//     tempElement.appendTo(body);
//
// }

// Register User

let userArr=[];

class User{
    constructor(fullName,email,password) {
        this.fullName = fullName;
        this.email = email;
        this.password=password;
    }
}


const createUser =()=>{


    const fullName = $('#full-name').val();
    const email = $('#register-email').val();
    const password = $('#register-password').val();



    let createdUser= new User(fullName , email , password);

    let existsUserData =userArr.find(data=>data.email===email);

    if(existsUserData){
        alert('User email already ')
        return;
    }

    userArr.push(createdUser);
    console.log(userArr);
}

// Register User


// Login User

const login=()=>{
    const email = $('#email').val();
    const password = $('#password').val();

    let existingUserData = userArr.find(data => data.email === email);

    if(existingUserData){
        if(existingUserData.password===password){
            //login => dashboard
            console.log('login success')
        }else{
            alert('password is wrong');

        }
    }else{
        alert('invalid email or password')
    }

}

// Login User

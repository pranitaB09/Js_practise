//THIS keyword: current context ko refer karne ke liye   this  keyword use krte hai.

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to our website`);
        
    }

}

user.welcomeMessage()
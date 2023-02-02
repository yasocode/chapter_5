//object literals

let user = {
    name: "Muzaffer",
    age: 45,
    email: "muzaffervictor@whatever.com",
    location: "merzifon",
    blogs: ["merzifonun güzellikleri", "merzifon nerededir?"],
    login: function(){
        console.log("the user has logged in");
    },
    logout: function(){
        console.log("the user has logged out");
    },
    logBlogs: function(){
        
    }
};

user.login();
user.logout();

const name = "seslüban";
name.toUpperCase();
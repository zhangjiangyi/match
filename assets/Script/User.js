class User {
    init(data){
        this.name = data.name;
        this.score = data.score;
    }
}

if (!window.User) {
    window.User = new User();
}
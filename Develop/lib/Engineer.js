// class Engineer {
//     constructor(name, id, email, GitHubUser){
//         this.name = name;
//         this.id = id;
//         this.email = email;
//         this.github = GitHubUser;
//         this.role = "Engineer";
//     }
// }

function Engineer (name, id, email, GitHubUser){
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = GitHubUser;
    this.role = "Engineer";
}

Engineer.prototype.getName = function(){
    return this.name;
}

Engineer.prototype.getId = function(){
    return this.id;
}

Engineer.prototype.getEmail = function(){
    return this.email;
}

Engineer.prototype.getGitHub = function(){
    return this.github;
}

Engineer.prototype.getRole = function(){
    return this.role;
}

module.exports = Engineer;
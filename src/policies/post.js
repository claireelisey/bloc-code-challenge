const ApplicationPolicy = require("./application");

module.exports = class PostPolicy extends ApplicationPolicy {

    new() {
        return this._isMember(); 
    }

    create() {
        return this.new();
    }

    edit() {
        return this._isOwner();
    }

    update() {
        return this.edit();
    }

    destroy() {
        return this.update();
    }
}
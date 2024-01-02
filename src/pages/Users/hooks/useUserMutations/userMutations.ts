import {UserInfo} from '../../types.ts';
import {UseListStateHandlers} from '@mantine/hooks';

export default class UserMutations {

    public lastSave = Date.now();

    constructor(private _users: UserInfo[], private _usersHandler: UseListStateHandlers<UserInfo>) {

        this.remove = this.remove.bind(this);
        this.save = this.save.bind(this);
        this.emailExists = this.emailExists.bind(this);
    }

    remove(user: UserInfo) {
        const userIndex = this._users.findIndex(u => u.id.value === user.id.value);
        this._usersHandler.remove(userIndex);
    }

    save(user: UserInfo) {
        this.lastSave = Date.now();

        const userIndex = this._users.findIndex(u => u.id.value === user.id.value);
        if (userIndex === -1) {
            this._usersHandler.insert(0, user);
            return;
        }
        this._usersHandler.setItem(userIndex, user);
    }

    emailExists(email: string, currentUser?: UserInfo) {
        return this._users.some(user => user.email === email && user.id.value !== currentUser?.id.value);
    }

    get users() {
        return this._users;
    }
}


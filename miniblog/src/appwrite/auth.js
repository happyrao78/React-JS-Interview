import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";
//THIS IS FOR THE NEW ACCOUNT CREATION , LOGIN , DELETE, LOGOUT

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //when account created successfully then the user will login directly
                return this.login({ email, password })
            }
            else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    async verifyAccount({ email, password }) {
        try {
            const verification = await this.account.createVerification(email)
            if (verification) {
                console.log("VERIFICATION SUCCESSFUL!!!")
                return this.login({ email, password })
            }
            else {
                console.log("VERIFICATION FAILED!!!")
            }
        } catch (error) {
            throw error;
        }
    }
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);

        } catch (error) {
            throw error;
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }

        return null;
    }
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();//CREATED AN OBJECT OF CLASS TO SIMPLIFY THE EXPORT

export default authService
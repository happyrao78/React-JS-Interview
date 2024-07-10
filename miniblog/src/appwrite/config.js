import conf from '../conf/conf'
import { Client, ID, Storage, Databases, Query } from "appwrite";
//THIS IS FOR PROVIDING THE SERVICES CRUD
export class Service {
    client = new Client();
    databases;
    bucket;
    //account should be called when construcer is called
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async CreatePost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatbaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("APPWRITE::ERROR::CREATEPOST", error);
        }
    }
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatbaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )

        } catch (error) {
            console.log("UPDATE ERROR::APPWRITE", error);
        }
    }
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatbaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("DELETE POST:: ERROR:: APPWRITE", error);
            return false;
        }
    }
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatbaseId,
                conf.appwriteCollectionId,
                slug,
            )

        } catch (error) {
            console.log("GET POST :: ERROR :: APPWRITE", error);
            return false;
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {

            return await this.databases.listDocuments(
                conf.appwriteCollectionId,
                conf.appwriteDatbaseId,
                queries,
            )

        } catch (error) {
            console.log("APPWRITE ERROR:: GET POSTS ALL", error);
            return false;
        }
    }
    //file upload services
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )

        } catch (error) {
            console.log("ERROR::UPLOAD FILE::APPWRITE", error);
            return false;
        }
    }
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,

                fileId
            )
            return true;
        } catch (error) {
            console.log("FILE DELETE FAILED::APPWRITE", error);
            return error;
        }
    }
    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    }


}

const service = new Service();
export default service;
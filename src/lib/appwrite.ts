import { Client, Databases, Account } from 'appwrite'

const client = new Client()
client.setEndpoint('https://cloud.appwrite.io/v1').setProject('<PROJECT_ID>')

export const account = new Account(client)
export const databases = new Databases(client)

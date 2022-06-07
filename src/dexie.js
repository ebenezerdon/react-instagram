import Dexie from 'dexie'

export const db = new Dexie('myInsta')
db.version(1).stores({
  bio: ',name,about',
  gallery: '++id,url',
})

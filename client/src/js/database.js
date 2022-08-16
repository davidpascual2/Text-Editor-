import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('PUT into database');
  const jateDB = await openDB('jate', 1); // open connection to db (or create if not) "say hello to db"

  const tx = jateDB.transaction('jate', 'readwrite'); // db is recognized, request readwrite permission to db

  const store = tx.objectStore('jate'); //once that is  granted,  can acess specific store you want to add data to

  const request = store.put({ jate: content }); //define the action you want to take

  const result = await request; //once action defined, execute action, await req for result, once results finished

  console.log(result, "data saved to the database"); //data added to db
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('GET all from database'); //
  
  const jateDB = await openDB("jate", 1);// creta connection

  const tx = jateDB.transaction("jate", 'readonly'); //request data access

  const store = tx.objectStore('jate'); //define object store you want to use

  const request = store.getAll(); //defin request you want to make (action you want to take)

  const result = await request //execute that request and await results
  // console.log(result);
  console.log('result.value', result) //
};

initdb();

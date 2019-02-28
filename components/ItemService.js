import  db from './db';

 const addItem =  (item) => {
    db.ref('/items').push({
        Fullname: item
    });
}
export default(addItem);
import uniqid from 'uniqid';

export default class Cart{
    constructor(){
        this.moviesItems = [];
    }

    //ADDING TO THE CART METHOD
    addItem(num,title,price){
        const item = {
            //this.num = num;
            id:uniqid(),
            num,
            title,
            price
        }
        this.moviesItems.push(item);
        this.persistDataLocally();
        return item;
    }

    //RETURN THE ARRAY
    showList(){
        return this.moviesItems;
    }

    //DELETE ITEMS FROM THE CART
    deleteItem(id){
        const index = this.moviesItems.findIndex(curr => curr.id===id);
        this.moviesItems.splice(index,1)
        this.persistDataLocally();
    }

    //UPDATE NUMBER OF MOVIES
    updateNumMovies(id,newNum){
        this.moviesItems.find(curr=>curr.id===id).num = newNum;
    }

    calcPrice(numTickets){
        this.price = parseInt(numTickets)*10;
    }

    //SAVE THE DATA TO LOCALSTORAGE
    persistDataLocally(){
        localStorage.setItem('cart',JSON.stringify(this.moviesItems));
    }

    //RESTORE DATA FROM LOCAL STORAGE
    restoreDataLocalStorage(){
        const data = JSON.parse(localStorage.getItem('cart'));
        if(data) this.moviesItems = data;
    }
}
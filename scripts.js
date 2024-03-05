/*MENU APP*/

class Item {         /*for the ingredients needed in the meal*/
    constructor(item, group, aisle) {
        this.item = item;
        this.group = group;
        this.aisle = aisle;
    }
    describe() {
        return`${this.item} is a ${this.group} product and is found in aisle ${this.aisle}`;
    }
}

class Meal {         /*the meal names that takes an array of items (ingredients)*/
    constructor(name) {
    this.name = name;
    this.items = [];
    }
    addItem (item){
        if(item instanceof Item) {
        this.items.push (item);    
        } else{
        throw new error('This is not an item');
        }
    }
    describe(){
        return`${this.name} has ${this.items.length} ingredients`;
    }
}

class Menu {         /*The main menu here*/
    constructor () {
        this.meals = [];
        this.selectedMeal = null;
    }
    start () {       /*the start of the application*/
        let selection = this.showMainMenuOptions ();
        while (selection != 0) {
         switch (selection) {
            case '1':
             this.createMeal ();
             break;
            case '2':
             this.viewMeal ();
             break;
            case '3':
             this.deleteMeal ();
             break;
            case '4':
             this.displayMeal ();
             break;
            default:
                selection = 0;          
         }   
         selection = this.showMainMenuOptions();
        }
    alert('Thank you')
    }
    showMainMenuOptions () {   /*these are the user options on the main menu*/
      return prompt (`
        0. EXIT
        1. CREATE MEAL
        2. VIEW MEAL
        3. DELETE MEAL
        4. DISPLAY ALL MEALS
        `);
    }
    showItemMenuOptions (itemInfo) {   /*these are the user options on the secondary menu*/
        return prompt (`
        0. GO BACK
        1. CREATE ITEM
        2. DELETE ITEM
        -----------------
        ${itemInfo}
        `);
    }

    createMeal () {    /*this is where the user can enter a name of new meal*/
        let name = prompt('Enter name of new meal:')
        this.meals.push(new Meal(name));
    }

    viewMeal () {     /*this is where the user can view meals and where secondary menu lives*/
        let index = prompt('Enter the index of the meal you wish to view:');
        if (index > -1 && index < this.meals.length) {
            this.selectedMeal = this.meals[index];
            let description = 'Ingredients for ' + this.selectedMeal.name + ': ' + '\n';
            description += ' ' + this.selectedMeal.describe() + '\n';

            for (let i = 0; i < this.selectedMeal.items.length; i++) {
                description += i + ': ' + this.selectedMeal.items[i].item + ', ' + this.selectedMeal.items[i].group + ', ' + this.selectedMeal.items[i].aisle + '\n';
            }
                     /*secondary menu to input items...instructions to create/delete to follow*/
            let selection2 = this.showItemMenuOptions (description);
            switch (selection2) {
                case '1':
                 this.createItem ();
                 break;
                case '2':
                 this.deleteItem ();           
            }     
        }
    }
    
    createItem () {
        let item = prompt('Enter the item name:');
        let group = prompt('Enter the food group of the item:');
        let aisle = prompt('Enter the aisle where the item is found:');
        this.selectedMeal.items.push(new Item (item, group, aisle));
    }

    deleteItem () {
        let index = prompt ('Enter the index of item to remove:');
        if (index > -1 && index < this.selectedMeal.items.length) {
            this.selectedMeal.items.splice(index, 1);
        }
    }
 

    deleteMeal () {   /*this is where  the user can delete a meal*/
        let index = prompt('Enter the index of the meal you wish to remove:')
        if (index > -1 && index < this.selectedMeal.length) {
            this.meals.splice(index, 1);
        }
    }

    displayMeal () {    /*this is to diplay all of the meals that were created*/
        let mealString = '';
        for (let i = 0; i < this.meals.length; i++) {
             mealString += i + ': ' + this.meals[i].name + '\n';  
           }
       alert (mealString);
    }
    
}
    

let menu = new Menu();
menu.start();
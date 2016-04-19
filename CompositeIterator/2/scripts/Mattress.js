class Mattress {
	constructor(menus) {
		this.menus = menus;
	}
	printMenu() {
		this.menus.print();
	}
	printVegetarianMenu() {
		let iterator = this.menus.createIterator();
		console.log("VEGETARIAN MENU");
		while(iterator.hasNext()){
			let menuComponent = iterator.next();
			try{
				if(menuComponent.isVegetarian()){
					menuComponent.print();
				}
			}catch(error){}
		}
	}
}

export default Mattress;
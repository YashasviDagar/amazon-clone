import { addToCart, cart, loadFromStoage, updateDeliveryOption } from '../../data/cart.js';

describe('test suite: addToCart', () => {
    it('add an existing product to the cart', () => {
        spyOn(localStorage, 'setItem');

        spyOn(localStorage, 'getItem').and.callFake(()=>{
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1',
        }]);
        });
        loadFromStoage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(2);
    });

    it('adds a new product to the cart', () => {
        spyOn(localStorage, 'setItem');
        
        //here we will create a mock test bcz the due the import of cart getItem from local storage the expected cart.length varies and thus the tests some times works and some times fail.
        spyOn(localStorage, 'getItem').and.callFake(()=>{
            return JSON.stringify([]);
        });//two parameters first is object and other is method
        
        loadFromStoage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);//mocked by spyOn only and tells how many times the method is called
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
    });
});

import { ADDITEM,UPDATEITEM } from "../types"

const initialState = {
    cart: []
}

const cartReducer = (state =initialState,action) => {

    switch (action.type) {
        case ADDITEM :
            /*khassna nchofo wash had litem kayen bé3da ola la !! 
            Bash ta iLa makansh ghadin ndékhloh 3adi*/
            const indexItemAdded = state.cart.findIndex(obj=> obj.id ===action.payload.id)
            if(indexItemAdded!==-1){
                const updatedQuantity = {
                    ...state.cart[indexItemAdded],
                    quantity : state.cart[indexItemAdded].quantity +
                    action.payload.quantity
                }
                const newArr = [...state.cart]
                newArr.splice(indexItemAdded,1,updatedQuantity)
                console.log(newArr)
                return {
                    cart : newArr
                }
            }else {
                const newArr = [...state.cart]
                newArr.push(action.payload)
                return {
                    cart : newArr            // kanpointiw 3La lcart Mashi l'objet state 
                }
            }
            
        case UPDATEITEM : 
            return {

            }

    }
    return state;    
}

export default cartReducer
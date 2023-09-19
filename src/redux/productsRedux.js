/* selectors */
export const getAll = ({ products }) => products;
export const getProductByCategory = ({ products }, category) => {
  return products.filter(product => product.category === category);
};

export const getProductByID = ({ products }, id) => {
  return products.filter(product => product.id === id);
};

export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getCompareProducts = ({ products }) =>
  products.filter(product => product.compare);

/* actions */
const createActionName = actionName => `app/products/${actionName}`;
const SET_USERS_STARS = createActionName('SET_USERS_STARS');
const TOGGLE_FAV = createActionName('TOGGLE_FAV');
const TOGGLE_COMPARE = createActionName('TOGGLE_COMPARE');

/* action creators*/
export const setUserStars = payload => ({ type: SET_USERS_STARS, payload });
export const toggleFavourite = payload => ({ type: TOGGLE_FAV, payload });

export const toggleCompare = payload => ({
  type: TOGGLE_COMPARE,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_USERS_STARS:
      return statePart.map(product =>
        product.id === action.payload.id
          ? { ...product, userStars: action.payload.value }
          : product
      );
    case TOGGLE_COMPARE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, compare: !product.compare }
          : product
      );

    case TOGGLE_FAV:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, favorite: !product.favorite }
          : product
      );
    default:
      return statePart;
  }
}

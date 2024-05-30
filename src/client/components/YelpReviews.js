// ./src/components/YelpReviews.js
import { YelpApi } from './YelpApi.js';


// YelpReviews.js
const YelpReviews = {
  render: async (store) => {
    if (!store || !store[0]) {
      return 'No results found.';
    }
    const { name, location, images, rating, reviews } = store[0];
    const address = location.display_address.join(', ');

    return `
      <div class="yelp-review-container"> 
        <div class="yelp-review"> 
          <div class="yelp-review-img">
            <img src="${images}" alt="${name}" />
          </div>
          <div class="yelp-review-text">
            <div class="yelp-review-header">
              <div class="yelp-review-header-container">
                <span class="yelp-review-title-text header05">
                  ${name}
                </span> 
              </div>
            </div>
            <div class="store-data">
              <div class="store-address">
                <span class="store-address-text text01">
                  ${address}
                </span>
              </div>
              <div class="store-rating">
                <span class="store-rating-text text01">
                  Rating: ${rating} (${reviews} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },
};

export default YelpReviews;

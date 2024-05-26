import axios from 'axios';

export const YelpApi = async (store = '') => {
  try {
    store = encodeURIComponent(store);
    const response = await axios.get(`http://localhost:5000/api/yelp/${store}`);
    if (response.data) {
      const businesses = response.data.businesses;
      const data = businesses.map((business) => {
        return {
          id: business.id,
          name: business.name,
          location: business.location,
          images: business.image_url,
          rating: business.rating,
          reviews: business.review_count
        };
      });
      return data;
    }
    return [];
  } catch (err) {
    console.error(err);
    return null; 
  }
};

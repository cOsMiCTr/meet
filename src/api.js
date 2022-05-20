/**
 *
 * @param {*} events:
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */
 

  export const extractLocations = (events) => {
    let [{ items }] = events;
    
    let extractLocations = items.map((event) => event.location);
    let locations = [...new Set(extractLocations)];
    return locations;
    };
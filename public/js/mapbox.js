/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoidG9tc3ljeiIsImEiOiJja2txNGViMnYxajlvMm9uc3I0NXBxZzYyIn0.pENmROhbsP1pa0OWKPNaHQ';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/tomsycz/ckkqxv0862okg17pey2gy6y1m',
    scrollZoom: false,
  
    // center: [-118.2229744352004, 34.06766963568984],
    // pitch: 60,
    // bearing: -60,
    // zoom: 10,
    // interactive: false,
    
  });
  const bounds = new mapboxgl.LngLatBounds();
  
  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';
  
    //Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);
    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);
  
    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });
  
  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });

}


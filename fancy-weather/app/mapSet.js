export default function mapSet(la, long) {
  mapboxgl.accessToken = 'pk.eyJ1IjoibGVxc2FyIiwiYSI6ImNrYW5yeTZidjB3djQycnFtdTV0ZTVvYjMifQ.WT8gCkDu90rFZ9dD4kWWsQ';
  let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [long, la],
      zoom: 8
  });
  let marker = new mapboxgl.Marker()
    .setLngLat([long, la])
    .addTo(map);
}

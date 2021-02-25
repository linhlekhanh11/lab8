function initMap() {
	// add your code here
	L.mapquest.key = 'LD33aNtOreJM5qEztypvH2jSHmpOFZYx'

	var map = L.mapquest.map('map', {
		center: [32.8785203, -117.23808],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});
	L.marker([32.8785203, -117.23808]).addTo(map)
}
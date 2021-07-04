function initMap() 
{
    if(document.title == "Restaurant Review: A Streetbar Named Desire")
    {
        let MapLocation = {lat: -26.149370, lng: 28.03460}
        let map = new google.maps.Map(document.getElementById("Map"), {
            zoom: 15,
            center: MapLocation
        });
    
        let LocationMarker = new google.maps.Marker({
            position: MapLocation,
            map: map,
            title: '144 Jan Smuts Ave.',
            label: 'A Streetbar Named Desire'
        });
    }

    if(document.title == "Restaurant Review: Costa Alta Beach Bar")
    {
        let MapLocation = {lat: -25.914409, lng: 27.898509}
        let map = new google.maps.Map(document.getElementById("Map"), {
            zoom: 15,
            center: MapLocation
        });
    
        let LocationMarker = new google.maps.Marker({
            position: MapLocation,
            map: map,
            title: 'Pelindaba Rd, Lanseria, 1748',
            label: 'Costa Alta Beach Bar'
        });
    }

    if(document.title == "Restaurant Review: Donatella's")
    {
        let MapLocation = {lat: -26.024704, lng: 28.013797}
        let map = new google.maps.Map(document.getElementById("Map"), {
            zoom: 15,
            center: MapLocation
        });
    
        let LocationMarker = new google.maps.Marker({
            position: MapLocation,
            map: map,
            title: 'Monte Casino Corner Witkopen &, William Nicol Dr, Fourways, Johannesburg, 2055',
            label: 'Donatellas'
        });
    }
    //-26.024704006461988, 28.013797496103045
}
const location = item => {
    return location_item = {
        "id": item.id,
        "name": item.name,
        "description": item.description,
        "latitude": item.latitude,
        "longitude": item.longitude,
        "category": {
            "id": item.categoryid,
            "name": item.categoryname,
            "hexcolor": item.hexcolor
        },
        "address": {
            "country": {
                "name": item.countryname
            },
            "city": {
                "zipcode": item.zipcode,
                "name": item.cityname
            },
            "street": item.street,
            "number": item.number
        },
        "mediaList": item.mediaFiles,
        "createUser": {
            "id": item.userid,
            "name": item.username
        },
        "createdTime": item.created_time,
        "updateTime": item.update_time
    }
};

module.exports = {
    location
}
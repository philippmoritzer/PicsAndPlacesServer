
const tour = item => {
    return tour_item = {
        "id": item.id,
        "name": item.name,
        "description": item.description,
        "length": item.length,
        "createUser": {
            "id": item.userid,
            "name": item.username,
            "role": item.role
        },
        "category": {
            "id": item.categoryid,
            "name": item.categoryname,
            "hexcolor": item.hexcolor
        },
        locations: [],
        "createdTime": item.tour_created_time,
        "updateTime": item.tour_update_time
    }

}

module.exports = {
    tour
}

const tour = item => {
    return tour_item = {
        "id": item.id,
        "name": item.name,
        "description": item.description,
        "length": item.length,
        "user": {
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
        "created_time": item.tour_created_time,
        "update_time": item.tour_update_time
    }

}

module.exports = {
    tour
}
const rating = item => {
    return rating_item = {
        "id": item.id,
        "value": item.value,
        "comment": item.comment,
        "createdUser": {
            "id": item.userId,
            "name": item.name
        },
        "createdTime": item.created_time,
        "updateTime": item.update_time
    }
}

module.exports = {
    rating
}

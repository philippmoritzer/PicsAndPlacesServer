class Location {
    constructor(id, name, description, latitude, longitude, category, create_user, created_time, update_time) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.latitude = latitude;
        this.longitude = longitude;
        this.category = category;
        this.create_user = create_user;
        this.created_time = created_time;
        this.update_time = update_time;
    }
}

module.exports.Category;

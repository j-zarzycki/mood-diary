db.createUser(
    {
        user: "pai",
        pwd: "pai123",
        roles: [
            {
                role: "readWrite",
                db: "paidb"
            }
        ]
    }
);
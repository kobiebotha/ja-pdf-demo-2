export async function getData(db: any) {
    // Add code to build data here
    return {user: await db.user.first()};
}